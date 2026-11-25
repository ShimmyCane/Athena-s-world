#!/usr/bin/env python3
"""Make spoken MP3 clips for Athena's world from text (Kokoro, English).

Adapted from the Voice repo's tools/make_kokoro.py. Kokoro-82M is an open voice
model (Apache 2.0). It runs on this computer: no account, no key, nothing is sent anywhere.
The synthetic voice is not a family member's voice.

Input: a manifest, a JSON list of {"id": "architect", "text": "Architect. Draws the plans."}.
       Optional per clip: "voice" (default af_heart), "speed" (default 0.92).
Output: <out>/<id>.mp3 (default out: audio/jobs). Existing files are kept unless --force.

Setup (once, outside the repo; the model files are not committed):
  python3 -m venv venv && . venv/bin/activate
  pip install kokoro-onnx soundfile
  npm pack kokoro-q8-shards kokoro-js        # model weights and voices from npm
  mkdir shards jsl && tar xzf kokoro-q8-shards-*.tgz -C shards && tar xzf kokoro-js-*.tgz -C jsl
  cd shards/package && cat kokoro-q8.part{0..5}.bin > model_q8.onnx && cd -
  python3 -c "import numpy as np,glob,os; v={os.path.basename(f)[:-4]: np.fromfile(f,dtype=np.float32).reshape(-1,1,256) for f in glob.glob('jsl/package/voices/*.bin')}; np.savez('shards/package/voices.npz', **v)"
Run:
  python3 -I tools/make_audio.py --model <dir with model_q8.onnx and voices.npz> --manifest <file.json> [--out audio/jobs] [--force]
Needs ffmpeg (libmp3lame) on the PATH.
"""
import argparse, json, os, subprocess, sys, tempfile
import numpy as np
import soundfile as sf

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SR = 24000


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--model', required=True, help='folder with model_q8.onnx and voices.npz')
    ap.add_argument('--manifest', required=True, help='JSON list of {id, text, voice?, speed?}')
    ap.add_argument('--out', default=os.path.join(ROOT, 'audio', 'jobs'))
    ap.add_argument('--force', action='store_true', help='remake clips that already exist')
    a = ap.parse_args()

    from kokoro_onnx import Kokoro
    kokoro = Kokoro(os.path.join(a.model, 'model_q8.onnx'), os.path.join(a.model, 'voices.npz'))
    with open(a.manifest, encoding='utf-8') as f:
        clips = json.load(f)
    os.makedirs(a.out, exist_ok=True)
    made = skipped = 0
    for c in clips:
        mp3 = os.path.join(a.out, c['id'] + '.mp3')
        if os.path.exists(mp3) and not a.force:
            skipped += 1
            continue
        audio, _ = kokoro.create(c['text'], voice=c.get('voice', 'af_heart'),
                                 speed=float(c.get('speed', 0.92)), lang='en-us')
        audio = np.asarray(audio, dtype=np.float32)
        with tempfile.TemporaryDirectory() as d:
            wav = os.path.join(d, 'clip.wav')
            sf.write(wav, audio, SR)
            subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', wav, '-codec:a', 'libmp3lame', '-q:a', '4', mp3], check=True)
        made += 1
        print('made', mp3)
    print(f'done: {made} made, {skipped} kept')


if __name__ == '__main__':
    sys.exit(main())
