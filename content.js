// Athena's world: the content for the Learning center, Retail therapy and Get a job.
// Edit the lists here to change the game. The game code is in index.html.

// ---- Learning center: the dessert round. Source: bank/desserts_round1.json (keep the two in step).
// Core questions are 1 point, bonus 2 points, challenge 5 points. Each question has a Test Bank style shape.
const QUESTIONS = [
  {
    "id": "DSRT-001",
    "question_type": "multiple_choice",
    "category": "Baking desserts",
    "subcategory": "Cakes and rising",
    "topic": "Leavening",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "Which ingredient makes a cake rise by giving off gas in the oven?",
    "choices": [
      "Baking powder",
      "Salt",
      "Sugar",
      "Vanilla"
    ],
    "correct_answer": "Baking powder",
    "accepted_answers": [],
    "explanation": "Baking powder releases gas when it is wet and heated, so the batter puffs up.",
    "traps": [
      "Salt and sugar do not make a cake rise."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-002",
    "question_type": "true_false",
    "category": "Baking desserts",
    "subcategory": "Cakes and sweetness",
    "topic": "Sugar's jobs",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "Sugar in a cake only adds sweetness and does nothing else.",
    "choices": [
      "True",
      "False"
    ],
    "correct_answer": "False",
    "accepted_answers": [],
    "explanation": "Sugar also helps the cake brown, keeps it moist and makes it tender.",
    "traps": [
      "Sugar does more than sweeten."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-003",
    "question_type": "multiple_choice",
    "category": "Baking desserts",
    "subcategory": "Meringue",
    "topic": "Main ingredient",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "What is the main ingredient in a meringue?",
    "choices": [
      "Egg whites",
      "Butter",
      "Flour",
      "Milk"
    ],
    "correct_answer": "Egg whites",
    "accepted_answers": [],
    "explanation": "Whisked egg whites hold air bubbles, which makes a meringue light and crisp.",
    "traps": [
      "Butter and flour are not used in a plain meringue."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-004",
    "question_type": "true_false",
    "category": "Baking desserts",
    "subcategory": "Cookies",
    "topic": "Chilling dough",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "Chilling cookie dough before baking can help the cookies keep their shape.",
    "choices": [
      "True",
      "False"
    ],
    "correct_answer": "True",
    "accepted_answers": [],
    "explanation": "Cold butter melts more slowly, so the cookies spread less.",
    "traps": [
      "Chilling does not make the dough rise."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-005",
    "question_type": "multiple_choice",
    "category": "Baking desserts",
    "subcategory": "Cakes and air",
    "topic": "Creaming",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "What does beating butter and sugar together until fluffy do?",
    "choices": [
      "Traps air in the mixture",
      "Cooks the butter",
      "Removes the sweetness",
      "Makes the sugar melt"
    ],
    "correct_answer": "Traps air in the mixture",
    "accepted_answers": [],
    "explanation": "Creaming traps tiny air bubbles, which help the cake rise and feel light.",
    "traps": [
      "The sugar does not melt at this stage."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-006",
    "question_type": "true_false",
    "category": "Baking desserts",
    "subcategory": "Flavourings",
    "topic": "Vanilla",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "Vanilla flavouring comes from the pods of a type of orchid.",
    "choices": [
      "True",
      "False"
    ],
    "correct_answer": "True",
    "accepted_answers": [],
    "explanation": "Vanilla beans are the cured pods of an orchid, Vanilla planifolia.",
    "traps": [
      "Vanilla is not made from a bean of coffee."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-007",
    "question_type": "multiple_choice",
    "category": "Baking desserts",
    "subcategory": "Ice cream",
    "topic": "Churning",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "Ice cream is made by freezing a sweet cream mixture while doing what?",
    "choices": [
      "Stirring it",
      "Shaking it still",
      "Heating it to boiling",
      "Leaving it alone"
    ],
    "correct_answer": "Stirring it",
    "accepted_answers": [],
    "explanation": "Stirring, or churning, breaks up ice crystals and keeps the ice cream smooth.",
    "traps": [
      "Leaving ice cream still makes it icy."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-008",
    "question_type": "true_false",
    "category": "Baking desserts",
    "subcategory": "Baking soda",
    "topic": "Acid needed",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "Baking soda needs an acid, such as buttermilk or lemon juice, to make bubbles.",
    "choices": [
      "True",
      "False"
    ],
    "correct_answer": "True",
    "accepted_answers": [],
    "explanation": "Baking soda is a base. It makes gas only when an acid is present.",
    "traps": [
      "Baking soda on its own does not make a cake rise well."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-009",
    "question_type": "multiple_choice",
    "category": "Baking desserts",
    "subcategory": "Custards",
    "topic": "Main ingredients",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "What is a custard mainly made of?",
    "choices": [
      "Eggs, milk or cream, and sugar",
      "Flour, butter and water",
      "Oil, sugar and cocoa",
      "Rice, milk and salt"
    ],
    "correct_answer": "Eggs, milk or cream, and sugar",
    "accepted_answers": [],
    "explanation": "Eggs thicken the milk or cream as they gently cook.",
    "traps": [
      "Flour is not the base of a classic custard."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-010",
    "question_type": "multiple_choice",
    "category": "Baking desserts",
    "subcategory": "Sugar types",
    "topic": "Granulated sugar",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "Which sugar is the plain white sugar most often used in baking?",
    "choices": [
      "Granulated sugar",
      "Brown sugar",
      "Icing sugar",
      "Maple sugar"
    ],
    "correct_answer": "Granulated sugar",
    "accepted_answers": [],
    "explanation": "Granulated sugar is the everyday white sugar in most recipes.",
    "traps": [
      "Brown sugar has molasses in it."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-011",
    "question_type": "true_false",
    "category": "Baking desserts",
    "subcategory": "Sugar types",
    "topic": "Brown sugar",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "Brown sugar contains molasses.",
    "choices": [
      "True",
      "False"
    ],
    "correct_answer": "True",
    "accepted_answers": [],
    "explanation": "Molasses is what gives brown sugar its colour and a soft, rich taste.",
    "traps": [
      "Brown sugar is not just white sugar with colour added."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-012",
    "question_type": "multiple_choice",
    "category": "Baking desserts",
    "subcategory": "Mixing",
    "topic": "Folding",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "What does folding mean in baking?",
    "choices": [
      "Gently mixing with a spatula to keep the air in",
      "Beating very hard with a whisk",
      "Heating the mixture until it boils",
      "Pressing the dough flat"
    ],
    "correct_answer": "Gently mixing with a spatula to keep the air in",
    "accepted_answers": [],
    "explanation": "Folding moves ingredients together slowly, so the air stays in a light batter.",
    "traps": [
      "Beating hard knocks the air out."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-013",
    "question_type": "multiple_choice",
    "category": "Baking desserts",
    "subcategory": "Tarts",
    "topic": "Tarte Tatin",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "Which fruit is used in the classic French upside-down tart, the tarte Tatin?",
    "choices": [
      "Apples",
      "Bananas",
      "Cherries",
      "Lemons"
    ],
    "correct_answer": "Apples",
    "accepted_answers": [],
    "explanation": "Apples are cooked in butter and sugar, then the pastry is placed on top and the tart is turned out.",
    "traps": [
      "Lemons are used in lemon curd, not in tarte Tatin."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-014",
    "question_type": "true_false",
    "category": "Baking desserts",
    "subcategory": "Meringues",
    "topic": "Pavlova",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "A pavlova is a dessert built around a meringue base.",
    "choices": [
      "True",
      "False"
    ],
    "correct_answer": "True",
    "accepted_answers": [],
    "explanation": "A pavlova is a crisp meringue shell, often topped with cream and fruit.",
    "traps": [
      "A pavlova is not a sponge cake."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-015",
    "question_type": "multiple_choice",
    "category": "Baking desserts",
    "subcategory": "Crumbles",
    "topic": "Topping",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "What is a crumble topping usually made from?",
    "choices": [
      "Flour, butter and sugar",
      "Eggs, milk and cocoa",
      "Cream and gelatine",
      "Rice and honey"
    ],
    "correct_answer": "Flour, butter and sugar",
    "accepted_answers": [],
    "explanation": "Rubbing cold butter into flour and sugar makes the crumbly topping.",
    "traps": [
      "Crumble is not made with eggs."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-016",
    "question_type": "true_false",
    "category": "Baking desserts",
    "subcategory": "Muffins",
    "topic": "Overmixing",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "Mixing a muffin batter too much can make the muffins tough.",
    "choices": [
      "True",
      "False"
    ],
    "correct_answer": "True",
    "accepted_answers": [],
    "explanation": "Too much mixing builds up gluten, which makes baked goods chewy and tough.",
    "traps": [
      "Muffins should be mixed only until just combined."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-017",
    "question_type": "multiple_choice",
    "category": "Baking desserts",
    "subcategory": "Chocolate",
    "topic": "Ganache",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "What is a ganache made from?",
    "choices": [
      "Melted chocolate and cream",
      "Sugar and water",
      "Eggs and flour",
      "Butter and milk only"
    ],
    "correct_answer": "Melted chocolate and cream",
    "accepted_answers": [],
    "explanation": "Stirring hot cream into chocolate makes a smooth, glossy ganache.",
    "traps": [
      "Ganache is not made with flour."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-018",
    "question_type": "multiple_choice",
    "category": "Baking desserts",
    "subcategory": "Baking basics",
    "topic": "Preheating",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "Why do recipes often say to preheat the oven?",
    "choices": [
      "So the oven is at the right heat when the food goes in",
      "So the oven can cool down first",
      "So the light turns on",
      "So the tray gets wet"
    ],
    "correct_answer": "So the oven is at the right heat when the food goes in",
    "accepted_answers": [],
    "explanation": "A hot oven starts the rising and setting straight away, which gives a better bake.",
    "traps": [
      "Preheating is not for cooling the oven."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-019",
    "question_type": "true_false",
    "category": "Baking desserts",
    "subcategory": "Lemon curd",
    "topic": "Ingredients",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "Lemon curd is made from eggs, sugar, butter and lemon juice.",
    "choices": [
      "True",
      "False"
    ],
    "correct_answer": "True",
    "accepted_answers": [],
    "explanation": "Lemon curd is cooked gently until thick, using eggs, sugar, butter and lemon.",
    "traps": [
      "Lemon curd does not need flour."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-020",
    "question_type": "multiple_choice",
    "category": "Baking desserts",
    "subcategory": "Layered desserts",
    "topic": "Tiramisu",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "Which Italian dessert is made with layers of ladyfinger biscuits and mascarpone cream?",
    "choices": [
      "Tiramisu",
      "Pavlova",
      "Crème brûlée",
      "Sorbet"
    ],
    "correct_answer": "Tiramisu",
    "accepted_answers": [],
    "explanation": "Tiramisu is soaked in coffee and layered with a creamy mascarpone mixture.",
    "traps": [
      "A pavlova is made with meringue, not ladyfingers."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-021",
    "question_type": "true_false",
    "category": "Baking desserts",
    "subcategory": "Cheesecake",
    "topic": "Chilling",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "A cheesecake is never chilled after it is baked.",
    "choices": [
      "True",
      "False"
    ],
    "correct_answer": "False",
    "accepted_answers": [],
    "explanation": "Many cheesecakes are baked, then cooled and chilled so they set firmly.",
    "traps": [
      "Cheesecake is often chilled to set it."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-022",
    "question_type": "multiple_choice",
    "category": "Baking desserts",
    "subcategory": "Cakes",
    "topic": "Resting",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "Why is a cake often left to rest before it is sliced?",
    "choices": [
      "It firms up so it does not crumble",
      "It makes the cake sweeter",
      "It stops the cake rising",
      "It cools the oven"
    ],
    "correct_answer": "It firms up so it does not crumble",
    "accepted_answers": [],
    "explanation": "As it cools, the cake sets, so it holds together when cut.",
    "traps": [
      "Resting does not add sweetness."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-023",
    "question_type": "multiple_choice",
    "category": "Baking desserts",
    "subcategory": "Sorbet",
    "topic": "Ingredients",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "What is sorbet mainly made of?",
    "choices": [
      "Fruit, sugar and water",
      "Milk, cream and eggs",
      "Butter and flour",
      "Chocolate and nuts"
    ],
    "correct_answer": "Fruit, sugar and water",
    "accepted_answers": [],
    "explanation": "Sorbet is a fruit ice with no milk or cream.",
    "traps": [
      "Sorbet does not contain milk."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-024",
    "question_type": "true_false",
    "category": "Baking desserts",
    "subcategory": "Brownies",
    "topic": "Chocolate base",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "Brownies are usually made with cocoa or chocolate.",
    "choices": [
      "True",
      "False"
    ],
    "correct_answer": "True",
    "accepted_answers": [],
    "explanation": "Cocoa or melted chocolate gives brownies their rich flavour.",
    "traps": [
      "Brownies are not usually made with vanilla alone."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-025",
    "question_type": "multiple_choice",
    "category": "Baking desserts",
    "subcategory": "Custards",
    "topic": "Water bath",
    "difficulty": 1,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "Why are baked custards often cooked in a water bath?",
    "choices": [
      "It cooks them gently so they do not curdle",
      "It makes them cold",
      "It adds flavour",
      "It makes them rise"
    ],
    "correct_answer": "It cooks them gently so they do not curdle",
    "accepted_answers": [],
    "explanation": "The water keeps the heat gentle and even, so the eggs set smoothly.",
    "traps": [
      "A water bath does not make custard rise."
    ],
    "points": 1,
    "section": "core"
  },
  {
    "id": "DSRT-B01",
    "question_type": "multiple_choice",
    "category": "Baking desserts",
    "subcategory": "Leavening",
    "topic": "Timing",
    "difficulty": 2,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "Why should a cake batter go into the oven soon after the baking powder is stirred in?",
    "choices": [
      "Baking powder starts making bubbles as soon as it is wet",
      "Baking powder stops working in the oven",
      "Baking powder needs to be cooked first",
      "The batter goes flat if it is stirred"
    ],
    "correct_answer": "Baking powder starts making bubbles as soon as it is wet",
    "accepted_answers": [],
    "explanation": "Once wet, baking powder begins releasing gas, so waiting too long wastes some of its lift.",
    "traps": [
      "It is not that the cake needs to sit first."
    ],
    "points": 2,
    "section": "bonus"
  },
  {
    "id": "DSRT-B02",
    "question_type": "multiple_choice",
    "category": "Baking desserts",
    "subcategory": "Soufflé",
    "topic": "Why it falls",
    "difficulty": 2,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "A soufflé falls if the oven door is opened too early. Why?",
    "choices": [
      "Cold air rushes in and the rising air bubbles collapse",
      "The sugar turns to water",
      "The eggs are cooked too much",
      "The soufflé gets too heavy to stand"
    ],
    "correct_answer": "Cold air rushes in and the rising air bubbles collapse",
    "accepted_answers": [],
    "explanation": "Sudden cold air shrinks the hot air and steam inside, so the soufflé loses its rise.",
    "traps": [
      "Eggs are not the reason it falls when the door is opened early."
    ],
    "points": 2,
    "section": "bonus"
  },
  {
    "id": "DSRT-B03",
    "question_type": "true_false",
    "category": "Baking desserts",
    "subcategory": "Caramel",
    "topic": "Browning",
    "difficulty": 2,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "Caramel turns brown because sugar breaks down and changes colour as it is heated.",
    "choices": [
      "True",
      "False"
    ],
    "correct_answer": "True",
    "accepted_answers": [],
    "explanation": "As sugar heats past its melting point, it changes chemically and turns golden then brown.",
    "traps": [
      "Caramel does not turn brown from milk alone."
    ],
    "points": 2,
    "section": "bonus"
  },
  {
    "id": "DSRT-C01",
    "question_type": "multiple_choice",
    "category": "Baking desserts",
    "subcategory": "Problem solving",
    "topic": "Flat cake",
    "difficulty": 3,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "Sam's cake came out flat and sank in the middle. The baking powder was fresh, the flour was measured, and the oven was working. Which change would most likely fix it?",
    "choices": [
      "Bake it a little longer and keep the oven door closed until it is nearly set",
      "Open the oven door every minute to check it",
      "Add more baking soda without any acid",
      "Beat the batter for much longer"
    ],
    "correct_answer": "Bake it a little longer and keep the oven door closed until it is nearly set",
    "accepted_answers": [],
    "explanation": "A cake that sinks in the middle is often underbaked or was disturbed while rising, so a longer, undisturbed bake helps it set.",
    "traps": [
      "Opening the door early can make a cake sink, and so can beating it too long."
    ],
    "points": 5,
    "section": "challenge"
  },
  {
    "id": "DSRT-C02",
    "question_type": "multiple_choice",
    "category": "Baking desserts",
    "subcategory": "Ice cream",
    "topic": "Smooth texture",
    "difficulty": 3,
    "source_authority": "Baking basics (general cooking knowledge)",
    "question_text": "Which two steps together make homemade ice cream smoother and less icy?",
    "choices": [
      "Churn while it freezes, and add a little sugar or alcohol to keep ice crystals small",
      "Freeze it still and never stir it",
      "Add extra water and freeze it solid",
      "Heat it to boiling before freezing"
    ],
    "correct_answer": "Churn while it freezes, and add a little sugar or alcohol to keep ice crystals small",
    "accepted_answers": [],
    "explanation": "Churning breaks up ice crystals, and sugar or alcohol lowers the freezing point, so fewer large icy crystals form.",
    "traps": [
      "Standing still freezing makes icier ice cream."
    ],
    "points": 5,
    "section": "challenge"
  }
];

// ---- Retail therapy: the shops. Each sells things by id (see ITEMS in models.js). ----
// Shops Athena knows from home (convo v0.8). Prices are in credits.
// Prices are set by time (convo v1.0): about 10 credits is 5 minutes of questions.
//   small things  3–5   (two of them for 5 minutes, like a chair or the pony)
//   furniture     8–12  (about 5 minutes)
//   special beds  14–18 (10–15 minutes)
//   things that move, like the windmill: 60 (save up for it)
const SHOPS = [
  { id: 'korean-grocery', name: 'H Mart', icon: '🥢', stock: [['teapot', 4], ['lantern', 5], ['mushroom', 4], ['mushroomblue', 6]] },
  { id: 'warehouse', name: 'Costco', icon: '📦', stock: [['sofa', 10], ['tv', 10], ['window', 6]] },
  { id: 'home-decor', name: 'Target', icon: '🎯', stock: [['vase', 3], ['picture', 4], ['sun', 4], ['rainbow', 4], ['fan', 60]] },
  { id: 'craft', name: 'Craft shop', icon: '🧶', stock: [['kite', 3], ['balloon', 3], ['basket', 4]] },
  { id: 'bakery', name: 'Bakery', icon: '🥐', stock: [['candle', 3], ['basket', 4]] },
  { id: 'toy', name: 'Toy shop', icon: '🧸', stock: [['pony', 5], ['teddy', 5], ['balloon', 3], ['kite', 3], ['mushroomstool', 5], ['rockinghorse', 60]] },
  { id: 'pet', name: 'Pet shop', icon: '🐠', stock: [['fishbowl', 6], ['basket', 4]] },
  { id: 'garden', name: 'Garden centre', icon: '🌱', stock: [['windmill', 60], ['pinwheel', 60], ['plant', 4], ['cactus', 3], ['tulip', 3], ['mushroomtall', 4], ['mushroomtrio', 6], ['haybale', 3]] },
  { id: 'bookshop', name: 'Bookshop', icon: '📚', stock: [['bookshelf', 9], ['lamp', 5], ['globe', 60]] },
  { id: 'furniture', name: 'Furniture shop', icon: '🪑', stock: [['bed', 12], ['bunkbed', 16], ['canopybed', 18], ['carbed', 18], ['haybed', 8], ['chair', 5], ['clock', 4]] },
  { id: 'bathroom', name: 'Bathroom shop', icon: '🛁', stock: [['bath', 10], ['mirror', 4]] },
  { id: 'music', name: 'Music shop', icon: '🎹', stock: [['piano', 14], ['lamp', 5]] },
  { id: 'home-depot', name: 'Home Depot', icon: '🔨', stock: [['frontdoor', 6], ['shutters', 5], ['flowerbox', 4], ['porchlamp', 4], ['awning', 5], ['sidingmint', 10], ['sidingpink', 10], ['sidingbrick', 12], ['sidingwood', 12]] }
];
// A trip home needs 25% of the shops visited (rounded up) and no minimum spending (tester feedback, 2026-11-25).
const TRIP = { shopsNeeded: Math.ceil(SHOPS.length * 0.25), spendNeeded: 0 };

// ---- Get a job: the list (from jobs.md). Full steps are written for some jobs below. ----
const JOBS = [
  {
    "id": "architect",
    "name": "Architect",
    "icon": "📐",
    "desc": "Draws the plans for buildings and houses."
  },
  {
    "id": "flight-attendant",
    "name": "Flight attendant",
    "icon": "✈️",
    "desc": "Looks after people on a plane and keeps everyone safe."
  },
  {
    "id": "pilot",
    "name": "Pilot",
    "icon": "🛫",
    "desc": "Flies the plane and checks the weather before take-off."
  },
  {
    "id": "artist",
    "name": "Artist",
    "icon": "🎨",
    "desc": "Makes pictures and paintings to share how they feel."
  },
  {
    "id": "dancer",
    "name": "Dancer",
    "icon": "💃",
    "desc": "Moves to music and tells stories with the body."
  },
  {
    "id": "singer",
    "name": "Singer",
    "icon": "🎤",
    "desc": "Sings songs for people to hear and sing along to."
  },
  {
    "id": "builder",
    "name": "Builder",
    "icon": "🧱",
    "desc": "Puts up walls, roofs and floors to make buildings."
  },
  {
    "id": "doctor",
    "name": "Doctor",
    "icon": "🩺",
    "desc": "Checks people when they are sick and helps them get better."
  },
  {
    "id": "nurse",
    "name": "Nurse",
    "icon": "🩹",
    "desc": "Looks after patients and helps doctors in the hospital."
  },
  {
    "id": "veterinarian",
    "name": "Veterinarian",
    "icon": "🐾",
    "desc": "Helps sick and hurt animals get better."
  },
  {
    "id": "teacher",
    "name": "Teacher",
    "icon": "🍎",
    "desc": "Helps children learn to read, count and make friends."
  },
  {
    "id": "firefighter",
    "name": "Firefighter",
    "icon": "🚒",
    "desc": "Puts out fires and helps people in emergencies."
  },
  {
    "id": "police-officer",
    "name": "Police officer",
    "icon": "🚓",
    "desc": "Keeps people safe and helps find lost things and people."
  },
  {
    "id": "chef",
    "name": "Chef",
    "icon": "🍳",
    "desc": "Cooks meals in a restaurant and makes new recipes."
  },
  {
    "id": "baker",
    "name": "Baker",
    "icon": "🥐",
    "desc": "Makes bread, cakes and biscuits early in the morning."
  },
  {
    "id": "farmer",
    "name": "Farmer",
    "icon": "🌾",
    "desc": "Grows food and looks after animals on a farm."
  },
  {
    "id": "gardener",
    "name": "Gardener",
    "icon": "🌻",
    "desc": "Plants, waters and trims flowers and trees."
  },
  {
    "id": "zookeeper",
    "name": "Zookeeper",
    "icon": "🦁",
    "desc": "Feeds and looks after the animals at the zoo."
  },
  {
    "id": "scientist",
    "name": "Scientist",
    "icon": "🔬",
    "desc": "Asks questions and tests them to find out how things work."
  },
  {
    "id": "astronaut",
    "name": "Astronaut",
    "icon": "🚀",
    "desc": "Flies to space and does experiments on a space station."
  },
  {
    "id": "bus-driver",
    "name": "Bus driver",
    "icon": "🚌",
    "desc": "Drives people safely around the town."
  },
  {
    "id": "train-driver",
    "name": "Train driver",
    "icon": "🚂",
    "desc": "Drives trains with lots of people on board."
  },
  {
    "id": "sailor",
    "name": "Sailor",
    "icon": "⛵",
    "desc": "Sails boats and keeps the ship working on the sea."
  },
  {
    "id": "lifeguard",
    "name": "Lifeguard",
    "icon": "🏊",
    "desc": "Watches swimmers and keeps them safe at the pool or beach."
  },
  {
    "id": "mail-carrier",
    "name": "Mail carrier",
    "icon": "📮",
    "desc": "Delivers letters and parcels to every house."
  },
  {
    "id": "librarian",
    "name": "Librarian",
    "icon": "📖",
    "desc": "Helps people find books and loves stories."
  },
  {
    "id": "photographer",
    "name": "Photographer",
    "icon": "📷",
    "desc": "Takes pictures of people, places and moments."
  },
  {
    "id": "author",
    "name": "Author",
    "icon": "🖋️",
    "desc": "Writes books and stories for people to read."
  },
  {
    "id": "musician",
    "name": "Musician",
    "icon": "🎸",
    "desc": "Plays instruments and makes music with others."
  },
  {
    "id": "actor",
    "name": "Actor",
    "icon": "🎭",
    "desc": "Pretends to be different people in plays and films."
  },
  {
    "id": "engineer",
    "name": "Engineer",
    "icon": "🔧",
    "desc": "Designs and fixes machines, bridges and gadgets."
  },
  {
    "id": "coder",
    "name": "Coder",
    "icon": "💻",
    "desc": "Writes instructions that make apps and games work."
  },
  {
    "id": "electrician",
    "name": "Electrician",
    "icon": "⚡",
    "desc": "Puts in and fixes the wires that bring power to buildings."
  },
  {
    "id": "hairdresser",
    "name": "Hairdresser",
    "icon": "💇",
    "desc": "Cuts, washes and styles hair."
  },
  {
    "id": "florist",
    "name": "Florist",
    "icon": "💐",
    "desc": "Makes bunches of flowers for people to give."
  },
  {
    "id": "tailor",
    "name": "Tailor",
    "icon": "🧵",
    "desc": "Sews and mends clothes so they fit well."
  },
  {
    "id": "beekeeper",
    "name": "Beekeeper",
    "icon": "🐝",
    "desc": "Looks after bees and collects their honey."
  }
];

// Who you meet for each job: a picture (person), a name (who) and a short hello (intro, 2-3 lines).
// About four in five of the people are women, with some men too (convo v0.8).
const JOB_PEOPLE = {
  "architect": { person: "👩‍💼", who: "Maya", intro: ["Hi, I'm Maya. I draw the plans for houses, schools and libraries.", "I measure every room and think about where the sun comes in.", "Then builders use my drawings to make it real!"] },
  "flight-attendant": { person: "💁‍♀️", who: "Grace", intro: ["Hi, I'm Grace. I look after everyone on the plane.", "I show how to stay safe and bring snacks and drinks.", "If someone feels worried, I help them feel calm."] },
  "pilot": { person: "👩‍✈️", who: "Captain Rosa", intro: ["Hi, I'm Captain Rosa. I fly big planes all over the world.", "Before take-off I check the weather and the plane, step by step.", "Up in the sky, I can see the tops of the clouds!"] },
  "artist": { person: "👩‍🎨", who: "Lily", intro: ["Hi, I'm Lily. I paint pictures with lots of colour.", "I look closely at things, then show how they make me feel.", "Some of my paintings hang in a gallery for everyone to see."] },
  "dancer": { person: "💃", who: "Sofia", intro: ["Hi, I'm Sofia. I tell stories by moving to music.", "I practise every day to make my body strong and bendy.", "On stage, the lights come on and I twirl and leap!"] },
  "singer": { person: "👩‍🎤", who: "Jade", intro: ["Hi, I'm Jade. I sing songs for people to enjoy.", "I warm up my voice with hums and silly sounds first.", "My favourite part is when everyone sings along."] },
  "builder": { person: "👷‍♂️", who: "Marcus", intro: ["Hi, I'm Marcus. I build walls, floors and roofs.", "I follow the architect's plans and wear a hard hat to stay safe.", "When we finish, a family gets a brand new home."] },
  "doctor": { person: "👩‍⚕️", who: "Dr. Priya", intro: ["Hi, I'm Dr. Priya. I help people when they feel sick.", "I listen to your heart and ask how you feel.", "Then I work out what will help you get better."] },
  "nurse": { person: "👨‍⚕️", who: "Daniel", intro: ["Hi, I'm Daniel. I look after patients in the hospital.", "I check temperatures, give medicine and cheer people up.", "Doctors and nurses work together as a team."] },
  "veterinarian": { person: "👩‍⚕️", who: "Dr. Hana", intro: ["Hi, I'm Dr. Hana. I'm a doctor for animals.", "I help puppies, kittens, bunnies and even horses feel better.", "Animals can't talk, so I watch them very carefully."] },
  "teacher": { person: "👩‍🏫", who: "Ms. Chen", intro: ["Hi, I'm Ms. Chen. I help children learn new things every day.", "We read stories, count, sing and do experiments.", "I love it when someone says, 'Oh! Now I get it!'"] },
  "firefighter": { person: "👩‍🚒", who: "Alex", intro: ["Hi, I'm Alex. I put out fires and help people in emergencies.", "When the alarm rings, I jump into my gear and onto the truck.", "I also teach kids how to stay safe at home."] },
  "police-officer": { person: "👮‍♀️", who: "Officer Kim", intro: ["Hi, I'm Officer Kim. I help keep our town safe.", "I help people who are lost and make sure traffic moves safely.", "If you need help, you can always ask a police officer."] },
  "chef": { person: "👨‍🍳", who: "Leo", intro: ["Hi, I'm Leo. I cook meals in a busy restaurant kitchen.", "I taste everything and invent new recipes.", "Making a plate look pretty is part of my job too!"] },
  "baker": { person: "👩‍🍳", who: "Mia", intro: ["Hi, I'm Mia. I bake bread, cakes and cookies.", "I start very early in the morning, before the sun comes up.", "The whole bakery smells sweet and warm."] },
  "farmer": { person: "👩‍🌾", who: "Ruth", intro: ["Hi, I'm Ruth. I grow vegetables and look after animals.", "I feed the chickens, milk the cows and water the crops.", "The food you eat might come from a farm like mine!"] },
  "gardener": { person: "👩‍🌾", who: "Ivy", intro: ["Hi, I'm Ivy. I plant flowers and trees and help them grow.", "I dig, water, trim and pull out weeds.", "Bees and butterflies love my gardens."] },
  "zookeeper": { person: "👩", who: "Nora", intro: ["Hi, I'm Nora. I look after the animals at the zoo.", "I make their food, clean their homes and give them toys.", "My favourite friend is a very hungry giraffe."] },
  "scientist": { person: "👩‍🔬", who: "Dr. Ada", intro: ["Hi, I'm Dr. Ada. I ask questions about how things work.", "Then I test my ideas with experiments and write down what happens.", "Sometimes I discover something nobody knew before!"] },
  "astronaut": { person: "👩‍🚀", who: "Commander Sally", intro: ["Hi, I'm Commander Sally. I fly into space on a rocket.", "On the space station everything floats, even my water!", "I do experiments and look down at the Earth."] },
  "bus-driver": { person: "👨", who: "Mr. Joe", intro: ["Hi, I'm Mr. Joe. I drive a big bus around town.", "I stop at every bus stop and say hello to everyone.", "I drive carefully so everyone gets there safely."] },
  "train-driver": { person: "👩‍🔧", who: "Bea", intro: ["Hi, I'm Bea. I drive a long train full of people.", "I follow the signals and keep the train on time.", "Choo choo! Next stop, the station."] },
  "sailor": { person: "👱‍♀️", who: "Marina", intro: ["Hi, I'm Marina. I sail boats across the sea.", "I tie strong knots and read the wind and the waves.", "At night, I can find my way by the stars."] },
  "lifeguard": { person: "🏊‍♀️", who: "Kai", intro: ["Hi, I'm Kai. I watch swimmers at the beach and the pool.", "I'm a strong swimmer, ready to help if someone needs it.", "I remind everyone to swim near a grown-up."] },
  "mail-carrier": { person: "🙋‍♀️", who: "Pam", intro: ["Hi, I'm Pam. I bring letters and parcels to every house.", "Rain or shine, I walk my route every day.", "I love seeing a smile when a birthday card arrives."] },
  "librarian": { person: "👩‍🏫", who: "Mrs. Patel", intro: ["Hi, I'm Mrs. Patel. I look after the books in the library.", "I help you find a story about dragons, space or anything you like.", "I also read stories aloud at story time."] },
  "photographer": { person: "🙆‍♀️", who: "Zoe", intro: ["Hi, I'm Zoe. I take photos of people, places and special days.", "I wait for the perfect light and the perfect smile.", "A photo saves a moment so you can keep it forever."] },
  "author": { person: "👵", who: "Elle", intro: ["Hi, I'm Elle. I write books and stories.", "I get ideas from my dreams, my walks and my cat.", "I write, then fix my words again and again until they shine."] },
  "musician": { person: "👨‍🎤", who: "Sam", intro: ["Hi, I'm Sam. I play the guitar and the drums.", "I practise a lot and play music with my band.", "Music can make people dance, smile or feel calm."] },
  "actor": { person: "👩‍🎤", who: "Ruby", intro: ["Hi, I'm Ruby. I pretend to be different people in plays and films.", "I learn my lines and practise how my character feels.", "When the audience claps, I take a big bow!"] },
  "engineer": { person: "👩‍🔧", who: "Eva", intro: ["Hi, I'm Eva. I design machines and bridges.", "I use maths to make sure they are strong and safe.", "If something breaks, I work out how to fix it."] },
  "coder": { person: "👩‍💻", who: "Lin", intro: ["Hi, I'm Lin. I write instructions that make apps and games work.", "Computers do exactly what I tell them, so I have to be very clear.", "When there's a bug, I hunt it down and fix it."] },
  "electrician": { person: "👨‍🔧", who: "Omar", intro: ["Hi, I'm Omar. I put in the wires that bring power to buildings.", "Thanks to me, the lights turn on when you flip a switch.", "Electricity can be dangerous, so I'm very careful."] },
  "hairdresser": { person: "👩‍🎨", who: "Bella", intro: ["Hi, I'm Bella. I cut, wash and style hair.", "I can do braids, bobs, curls and even bright colours.", "I help people feel happy when they look in the mirror."] },
  "florist": { person: "👩‍🌾", who: "Daisy", intro: ["Hi, I'm Daisy. I make beautiful bunches of flowers.", "I pick colours that go together, like a painting.", "People give my flowers for birthdays and to say 'I love you'."] },
  "tailor": { person: "👴", who: "Mr. Arturo", intro: ["Hi, I'm Arturo. I sew and fix clothes so they fit just right.", "I measure carefully, then cut and stitch the cloth.", "A new button or hem can make clothes feel like new."] },
  "beekeeper": { person: "👩‍🌾", who: "Honey", intro: ["Hi, I'm Honey. I look after bees in their hives.", "I wear a suit and veil so the bees don't sting me.", "The bees make honey, and they help flowers grow too."] }
};
JOBS.forEach(j => Object.assign(j, JOB_PEOPLE[j.id] || {}));

// Full steps. A job with no entry here shows its card, and its steps come later.
// learn: short pages. quiz: multiple choice (first-try rules as in the Learning center).
// challenge: a question for a real worker, scaffolded with choices and a sentence starter.
// task: the first-pass practice, with the right answer as `a`.
const JOB_STEPS = {
  architect: {
    learn: [
      { emoji: '📐', text: 'Architects draw plans. A plan is a picture from above that shows where every wall, door and window goes.' },
      { emoji: '📏', text: 'Architects measure first. They check how big a room is and where the sun comes in, before they draw anything.' }
    ],
    quiz: [
      { q: 'What does an architect draw?', choices: ['A plan', 'A song', 'A cake'], a: 'A plan' },
      { q: 'Why do architects measure first?', choices: ['To know how big things are', 'To find fish', 'To make music'], a: 'To know how big things are' },
      { q: 'What does a plan show?', choices: ['Where the walls and windows go', 'What the weather is', 'What to eat'], a: 'Where the walls and windows go' }
    ],
    challenge: {
      scene: 'A family wants a window in the kitchen, but the wall is short.',
      question: 'Ask someone who builds houses: what are some ways to solve this?',
      choices: ['Make the window smaller', 'Move the window up a little', 'Choose a different wall'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: where should the bed go in the plan, so it does not block the door?',
      choices: ['Next to the wall, away from the door', 'In front of the door', 'In the middle of the doorway'],
      a: 'Next to the wall, away from the door'
    }
  },
  pilot: {
    learn: [
      { emoji: '🛫', text: 'Pilots fly planes. Before take-off they check the plane and the weather.' },
      { emoji: '🗼', text: 'Pilots talk to air traffic control. They help planes stay apart and land safely.' }
    ],
    quiz: [
      { q: 'What do pilots check before take-off?', choices: ['The plane and the weather', 'The cake', 'The bus times'], a: 'The plane and the weather' },
      { q: 'Who helps planes stay apart?', choices: ['Air traffic control', 'The baker', 'The librarian'], a: 'Air traffic control' },
      { q: 'Where do pilots sit?', choices: ['In the cockpit', 'In the cabin with the seats', 'On the wing'], a: 'In the cockpit' }
    ],
    challenge: {
      scene: 'The airport is very foggy, and the plane cannot see the runway well.',
      question: 'Ask a pilot: what are some ways the plane could still land safely?',
      choices: ['Use the instruments to see the way down', 'Land without looking at anything', 'Wait for the fog to be a different colour'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: which of these should a pilot check before take-off?',
      choices: ['The fuel', 'Whether the cake is tasty', 'The weather'],
      a: 'The fuel'
    }
  },
  artist: {
    learn: [
      { emoji: '🎨', text: 'Artists make pictures to show feelings and ideas.' },
      { emoji: '🖌️', text: 'Artists mix colours. Mixing yellow and blue makes green.' }
    ],
    quiz: [
      { q: 'What colour do you get from red and yellow?', choices: ['Orange', 'Purple', 'Brown'], a: 'Orange' },
      { q: 'What do artists use to paint?', choices: ['A brush', 'A spoon', 'A ball'], a: 'A brush' },
      { q: 'Why do artists make pictures?', choices: ['To show feelings and ideas', 'To count the stars', 'To fix cars'], a: 'To show feelings and ideas' }
    ],
    challenge: {
      scene: 'You only have blue and yellow paint, and you want to paint a tree.',
      question: 'Ask an artist: what could you make, and how?',
      choices: ['Mix the blue and yellow to make green', 'Paint with only blue', 'Use no paint at all'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: which mix makes green?',
      choices: ['Blue and yellow', 'Red and blue', 'Red and yellow'],
      a: 'Blue and yellow'
    }
  }
};

// ---- Get a job: steps for the other 34 jobs (tester note, 2026-11-25). Same shape as JOB_STEPS.architect. ----
Object.assign(JOB_STEPS, {
  'flight-attendant': {
    learn: [
      { emoji: '✈️', text: 'Flight attendants look after everyone on a plane. They say hello and show people their seats.' },
      { emoji: '🦺', text: 'They show how to buckle a seat belt and where the exits are. They know what to do if something goes wrong.' }
    ],
    quiz: [
      { q: 'What do flight attendants show people?', choices: ['How to buckle a seat belt', 'How to bake a cake', 'How to ride a bike'], a: 'How to buckle a seat belt' },
      { q: 'Who looks after everyone on the plane?', choices: ['The flight attendants', 'The bakers', 'The gardeners'], a: 'The flight attendants' },
      { q: 'What do they know about the exits?', choices: ['Where they are', 'What colour they are', 'How to sing them'], a: 'Where they are' }
    ],
    challenge: {
      scene: 'A child on the plane is feeling worried about the bumpy ride.',
      question: 'Ask a flight attendant: what are some ways to help them feel calm?',
      choices: ['Sit with them and talk about something fun', 'Tell them to stop being scared', 'Turn the lights off and leave them alone'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what should a flight attendant do before take-off?',
      choices: ['Check that every seat belt is fastened', 'Start cooking dinner', 'Water the plants'],
      a: 'Check that every seat belt is fastened'
    }
  },
  dancer: {
    learn: [
      { emoji: '💃', text: 'Dancers move to music. They use their arms, legs and whole body to tell a story.' },
      { emoji: '🩰', text: 'Dancers practise the same moves again and again until they feel easy and strong.' }
    ],
    quiz: [
      { q: 'What do dancers move to?', choices: ['Music', 'Rain', 'Cars'], a: 'Music' },
      { q: 'What do dancers use to tell a story?', choices: ['Their body', 'A spoon', 'A map'], a: 'Their body' },
      { q: 'How do dancers get good at a move?', choices: ['They practise it again and again', 'They never try', 'They wait for it to happen'], a: 'They practise it again and again' }
    ],
    challenge: {
      scene: 'A dance is about a sad day, but the music is very happy.',
      question: 'Ask a dancer: what are some ways to show a sad story with your body?',
      choices: ['Move slowly and let your arms droop', 'Jump as high as you can', 'Stand still and smile'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: which move would show a happy feeling?',
      choices: ['Spinning round with your arms up', 'Lying down very still', 'Hiding behind a chair'],
      a: 'Spinning round with your arms up'
    }
  },
  singer: {
    learn: [
      { emoji: '🎤', text: 'Singers sing songs with their voice. They breathe deep so the song can be heard.' },
      { emoji: '🎶', text: 'Singers learn the words and the tune. They practise until they can sing them clearly.' }
    ],
    quiz: [
      { q: 'What do singers use to make a song?', choices: ['Their voice', 'A hammer', 'A plate'], a: 'Their voice' },
      { q: 'What helps a singer be heard?', choices: ['Breathing deep', 'Whispering very quietly', 'Covering their mouth'], a: 'Breathing deep' },
      { q: 'What do singers learn first?', choices: ['The words and the tune', 'How to drive', 'How to swim'], a: 'The words and the tune' }
    ],
    challenge: {
      scene: 'The audience is far away at the back of a big hall.',
      question: 'Ask a singer: what are some ways to make sure everyone can hear you?',
      choices: ['Sing with a strong breath and face the back', 'Sing very softly', 'Sing with your eyes closed and sit down'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what helps a singer sing a long note?',
      choices: ['A big, steady breath', 'Holding the breath for no reason', 'Talking instead of singing'],
      a: 'A big, steady breath'
    }
  },
  builder: {
    learn: [
      { emoji: '🧱', text: 'Builders put up walls, roofs and floors. They use bricks, wood and strong nails.' },
      { emoji: '📐', text: 'Builders check that each wall stands straight, using a long tool with a bubble in it.' }
    ],
    quiz: [
      { q: 'What do builders put up?', choices: ['Walls, roofs and floors', 'Clouds', 'Waves'], a: 'Walls, roofs and floors' },
      { q: 'What tool shows if a wall is straight?', choices: ['A spirit level', 'A paintbrush', 'A teapot'], a: 'A spirit level' },
      { q: 'What do builders use to join wood?', choices: ['Strong nails', 'Cotton wool', 'Jelly'], a: 'Strong nails' }
    ],
    challenge: {
      scene: 'The wall you are building is leaning a little to one side.',
      question: 'Ask a builder: what are some ways to fix a wall that leans?',
      choices: ['Check it with a level and move the bricks back', 'Paint it so no one can see', 'Build the next wall on top of it anyway'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what should a builder check before the roof goes on?',
      choices: ['That the walls are straight and strong', 'What colour the roof is', 'Whether it is raining'],
      a: 'That the walls are straight and strong'
    }
  },
  doctor: {
    learn: [
      { emoji: '🩺', text: 'Doctors check people who are sick. They listen to the heart and look in the ears.' },
      { emoji: '💊', text: 'Doctors decide how to help people get better. Sometimes that means rest, and sometimes medicine.' }
    ],
    quiz: [
      { q: 'What does a doctor listen to?', choices: ['The heart', 'The rain', 'The radio'], a: 'The heart' },
      { q: 'What does a doctor do when someone is sick?', choices: ['Checks them to help them get better', 'Sells them a car', 'Teaches them to sing'], a: 'Checks them to help them get better' },
      { q: 'What can help a person get better?', choices: ['Rest or medicine', 'Eating paper', 'Staying up all night'], a: 'Rest or medicine' }
    ],
    challenge: {
      scene: 'A friend has a tummy ache and does not want to eat.',
      question: 'Ask a doctor: what are some ways to help a friend feel better?',
      choices: ['Let them rest and tell a grown-up', 'Make them run around', 'Say it is nothing and ignore them'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what does a doctor use to listen to a heartbeat?',
      choices: ['A stethoscope', 'A spoon', 'A shoe'],
      a: 'A stethoscope'
    }
  },
  nurse: {
    learn: [
      { emoji: '🩹', text: 'Nurses look after patients in hospital. They check their temperature and give them their medicine.' },
      { emoji: '🛏️', text: 'Nurses help doctors. They keep the beds clean and make sure patients are comfortable.' }
    ],
    quiz: [
      { q: 'Where do nurses look after patients?', choices: ['In hospital', 'In a bakery', 'On a farm'], a: 'In hospital' },
      { q: 'What do nurses check?', choices: ['Temperature', 'The weather', 'Football scores'], a: 'Temperature' },
      { q: 'Who do nurses help?', choices: ['Doctors', 'Pirates', 'Bus drivers only'], a: 'Doctors' }
    ],
    challenge: {
      scene: 'A patient is scared of the needle.',
      question: 'Ask a nurse: what are some ways to help the patient feel brave?',
      choices: ['Explain each step and hold their hand', 'Do it quickly without a word', 'Tell them to look away and not ask'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what should a nurse do before giving medicine?',
      choices: ['Check the name and the dose', 'Guess how much to give', 'Give it to the nearest person'],
      a: 'Check the name and the dose'
    }
  },
  veterinarian: {
    learn: [
      { emoji: '🐾', text: 'Vets help sick and hurt animals. They check dogs, cats, birds and even hamsters.' },
      { emoji: '🩺', text: 'Vets are gentle. They talk softly and check each animal carefully before they give any medicine.' }
    ],
    quiz: [
      { q: 'Who do vets help?', choices: ['Sick and hurt animals', 'Sick cars', 'Lost shoes'], a: 'Sick and hurt animals' },
      { q: 'How do vets treat animals?', choices: ['Gently and carefully', 'Roughly and quickly', 'With a loud voice'], a: 'Gently and carefully' },
      { q: 'What do vets check before medicine?', choices: ['Each animal carefully', 'The weather', 'The shop prices'], a: 'Each animal carefully' }
    ],
    challenge: {
      scene: 'A puppy has hurt its paw and keeps trying to run away.',
      question: 'Ask a vet: what are some ways to help the puppy stay calm?',
      choices: ['Speak softly and hold the puppy gently', 'Chase the puppy around the room', 'Put the puppy in a box and shout'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: how should a vet hold a hurt bird?',
      choices: ['Gently, with both hands', 'Tightly in one fist', 'Upside down'],
      a: 'Gently, with both hands'
    }
  },
  teacher: {
    learn: [
      { emoji: '🍎', text: 'Teachers help children learn to read, count and write. They make lessons fun.' },
      { emoji: '🤝', text: 'Teachers help children make friends and feel safe. They listen when someone is worried.' }
    ],
    quiz: [
      { q: 'What do teachers help children learn?', choices: ['To read, count and write', 'To fly planes', 'To cook soup'], a: 'To read, count and write' },
      { q: 'How do teachers make lessons?', choices: ['Fun', 'Very boring', 'Quiet all day'], a: 'Fun' },
      { q: 'What do teachers do when a child is worried?', choices: ['Listen and help', 'Ignore them', 'Send them outside alone'], a: 'Listen and help' }
    ],
    challenge: {
      scene: 'A child in the class finds counting very hard and feels sad.',
      question: 'Ask a teacher: what are some ways to help them feel better about counting?',
      choices: ['Use counters or toys and praise each step', 'Tell them they are no good at it', 'Give them harder sums straight away'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: how many apples are 2 apples and 3 more?',
      choices: ['5', '4', '6'],
      a: '5'
    }
  },
  firefighter: {
    learn: [
      { emoji: '🚒', text: 'Firefighters put out fires and help people in emergencies. They ride in a big red fire engine.' },
      { emoji: '🧯', text: 'Firefighters wear special clothes and helmets. They use hoses full of water to put out the fire.' }
    ],
    quiz: [
      { q: 'What do firefighters put out?', choices: ['Fires', 'Candles on cakes', 'Music'], a: 'Fires' },
      { q: 'What do firefighters ride in?', choices: ['A fire engine', 'A bicycle', 'A rowing boat'], a: 'A fire engine' },
      { q: 'What do firefighters use to put out a fire?', choices: ['Water from hoses', 'Sand from a bucket only', 'Sweets'], a: 'Water from hoses' }
    ],
    challenge: {
      scene: 'There is smoke in a house, and a child is in an upstairs room.',
      question: 'Ask a firefighter: what are some ways to get the child out safely?',
      choices: ['Crawl low under the smoke and call out to the child', 'Run up the stairs through thick smoke', 'Wait until the smoke goes away'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what should you do first if you smell smoke at home?',
      choices: ['Tell a grown-up and get out', 'Go and look for the fire', 'Hide under the bed'],
      a: 'Tell a grown-up and get out'
    }
  },
  'police-officer': {
    learn: [
      { emoji: '🚓', text: 'Police officers keep people safe. They help find lost things and lost people.' },
      { emoji: '👮', text: 'Police officers listen to everyone and help them. They tell the truth and treat people fairly.' }
    ],
    quiz: [
      { q: 'What do police officers help people do?', choices: ['Stay safe', 'Make cakes', 'Grow carrots'], a: 'Stay safe' },
      { q: 'What do police officers find?', choices: ['Lost things and people', 'Stars', 'Rainbows'], a: 'Lost things and people' },
      { q: 'How do police officers treat people?', choices: ['Fairly', 'Unfairly', 'Rudely'], a: 'Fairly' }
    ],
    challenge: {
      scene: 'A child has got separated from their family in a busy shop.',
      question: 'Ask a police officer: what are some ways to help the child find their family?',
      choices: ['Take the child to a safe place and ask for their name', 'Leave the child on their own', 'Shout to see who answers'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what should a lost child do?',
      choices: ['Stay where they are and find a grown-up in uniform', 'Walk off to find home alone', 'Hide in a clothes shop'],
      a: 'Stay where they are and find a grown-up in uniform'
    }
  },
  chef: {
    learn: [
      { emoji: '🍳', text: 'Chefs cook meals in a restaurant. They chop, stir and taste to make the food right.' },
      { emoji: '📝', text: 'Chefs make new recipes. They try different mixes of food and keep the ones that taste best.' }
    ],
    quiz: [
      { q: 'What do chefs do to check food?', choices: ['Taste it', 'Throw it away', 'Hide it'], a: 'Taste it' },
      { q: 'Where do chefs cook?', choices: ['In a restaurant', 'In a library', 'On a train'], a: 'In a restaurant' },
      { q: 'What do chefs make?', choices: ['New recipes', 'New planets', 'New shoes'], a: 'New recipes' }
    ],
    challenge: {
      scene: 'A soup is too salty, and the customers are waiting.',
      question: 'Ask a chef: what are some ways to fix the soup?',
      choices: ['Add water or potato to soak up some salt', 'Serve it anyway without a word', 'Add more salt to hide it'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what should a chef do before cooking?',
      choices: ['Wash their hands', 'Play with the knives', 'Take off the oven door'],
      a: 'Wash their hands'
    }
  },
  baker: {
    learn: [
      { emoji: '🥐', text: 'Bakers make bread, cakes and biscuits. They get up early so the bread is warm for breakfast.' },
      { emoji: '🥖', text: 'Bakers mix flour, water and yeast to make bread dough. The dough rises before it goes in the oven.' }
    ],
    quiz: [
      { q: 'What do bakers make?', choices: ['Bread, cakes and biscuits', 'Cars', 'Roads'], a: 'Bread, cakes and biscuits' },
      { q: 'When do bakers start work?', choices: ['Early in the morning', 'Late at night', 'At lunchtime'], a: 'Early in the morning' },
      { q: 'What makes bread rise?', choices: ['Yeast', 'Sand', 'Paint'], a: 'Yeast' }
    ],
    challenge: {
      scene: 'The bread dough is not rising, and the shop opens soon.',
      question: 'Ask a baker: what are some ways to fix it?',
      choices: ['Check the yeast and put the dough somewhere warm', 'Put it in the freezer', 'Bake it flat and hope for the best'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what goes into bread dough?',
      choices: ['Flour and water', 'Sand and glue', 'Paint and paper'],
      a: 'Flour and water'
    }
  },
  farmer: {
    learn: [
      { emoji: '🌾', text: 'Farmers grow food like wheat, carrots and apples. They plant seeds in spring.' },
      { emoji: '🐄', text: 'Farmers look after animals too. They feed the cows and collect the eggs every morning.' }
    ],
    quiz: [
      { q: 'What do farmers grow?', choices: ['Food', 'Houses', 'Computers'], a: 'Food' },
      { q: 'When do farmers plant seeds?', choices: ['In spring', 'In the middle of the night', 'Never'], a: 'In spring' },
      { q: 'What do farmers do each morning?', choices: ['Feed the animals', 'Sleep in', 'Sail a boat'], a: 'Feed the animals' }
    ],
    challenge: {
      scene: 'It has not rained for weeks, and the crops are drying out.',
      question: 'Ask a farmer: what are some ways to keep the crops alive?',
      choices: ['Water them carefully and use a cover in the hot part of the day', 'Cut them all down straight away', 'Leave them and hope it rains'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what does a seed need to grow?',
      choices: ['Water, soil and sun', 'Paint and glue', 'Sand only'],
      a: 'Water, soil and sun'
    }
  },
  gardener: {
    learn: [
      { emoji: '🌻', text: 'Gardeners plant flowers and trees. They water them, pull out weeds and cut back the old leaves.' },
      { emoji: '🪴', text: 'Gardeners know which plants like sun and which like shade. They plant each one in the right place.' }
    ],
    quiz: [
      { q: 'What do gardeners plant?', choices: ['Flowers and trees', 'Roads', 'Bricks'], a: 'Flowers and trees' },
      { q: 'What do gardeners pull out?', choices: ['Weeds', 'Books', 'Shoes'], a: 'Weeds' },
      { q: 'What do gardeners think about before planting?', choices: ['Whether the plant likes sun or shade', 'The colour of the fence', 'The time on the clock'], a: 'Whether the plant likes sun or shade' }
    ],
    challenge: {
      scene: 'A rose bush has yellow leaves and looks unhappy.',
      question: 'Ask a gardener: what are some ways to help the rose bush?',
      choices: ['Check the water and move it to a sunnier spot', 'Pull it out straight away', 'Paint the leaves green'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what should you do before you plant a seed?',
      choices: ['Make a hole in the soil', 'Put it in the bath', 'Put it in a drawer'],
      a: 'Make a hole in the soil'
    }
  },
  zookeeper: {
    learn: [
      { emoji: '🦁', text: 'Zookeepers feed and look after the animals at the zoo. Each animal eats different food.' },
      { emoji: '🧹', text: 'Zookeepers clean the animal homes every day, so the animals stay healthy and happy.' }
    ],
    quiz: [
      { q: 'What do zookeepers do with food?', choices: ['Feed the animals', 'Eat it all', 'Throw it in the sea'], a: 'Feed the animals' },
      { q: 'Do all animals eat the same food?', choices: ['No, each one eats different food', 'Yes, all of them', 'Only the lions'], a: 'No, each one eats different food' },
      { q: 'Why do zookeepers clean the animal homes?', choices: ['So the animals stay healthy', 'So the animals can hide', 'So the zoo is dark'], a: 'So the animals stay healthy' }
    ],
    challenge: {
      scene: 'A lion has stopped eating its dinner.',
      question: 'Ask a zookeeper: what are some ways to find out why?',
      choices: ['Check the food, watch the lion and tell the vet', 'Give the lion a much bigger dinner', 'Ignore the lion until it eats'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what should a zookeeper do before going near a big animal?',
      choices: ['Check that it is safe and ask a grown-up', 'Feed it a sweet', 'Climb into its home'],
      a: 'Check that it is safe and ask a grown-up'
    }
  },
  scientist: {
    learn: [
      { emoji: '🔬', text: 'Scientists ask questions and test them. They try things out to find out how the world works.' },
      { emoji: '📓', text: 'Scientists write down what they see in a notebook, so they can check it again later.' }
    ],
    quiz: [
      { q: 'What do scientists ask?', choices: ['Questions', 'Riddles only', 'Nothing'], a: 'Questions' },
      { q: 'How do scientists find out the answer?', choices: ['They test it', 'They guess and stop', 'They wait for a sign'], a: 'They test it' },
      { q: 'Where do scientists write what they see?', choices: ['In a notebook', 'On the walls', 'In the sky'], a: 'In a notebook' }
    ],
    challenge: {
      scene: 'You think a plant grows faster in the dark, and you want to find out.',
      question: 'Ask a scientist: what are some ways to test this?',
      choices: ['Grow two plants, one in the light and one in the dark, and measure them', 'Ask the plant what it likes', 'Only look at the plant once'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what should a scientist write down during a test?',
      choices: ['What happened each day', 'Only the ending', 'Nothing at all'],
      a: 'What happened each day'
    }
  },
  astronaut: {
    learn: [
      { emoji: '🚀', text: 'Astronauts fly to space in a rocket. They float because there is almost no gravity in space.' },
      { emoji: '🛰️', text: 'Astronauts live on a space station and do experiments. They look down at the Earth from very high up.' }
    ],
    quiz: [
      { q: 'How do astronauts get to space?', choices: ['In a rocket', 'On a bike', 'By swimming'], a: 'In a rocket' },
      { q: 'Why do astronauts float?', choices: ['There is almost no gravity', 'They are very light', 'They are wearing wings'], a: 'There is almost no gravity' },
      { q: 'What do astronauts do on the space station?', choices: ['Experiments', 'Baking', 'Fishing'], a: 'Experiments' }
    ],
    challenge: {
      scene: 'A drink in space floats into the air instead of staying in the cup.',
      question: 'Ask an astronaut: what are some ways to keep drinks safe in space?',
      choices: ['Use a sealed bag or a straw with a lid', 'Pour it out on the floor', 'Shake the cup as hard as you can'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what should an astronaut wear to go outside a spaceship?',
      choices: ['A spacesuit', 'Swimming shorts', 'A raincoat'],
      a: 'A spacesuit'
    }
  },
  'bus-driver': {
    learn: [
      { emoji: '🚌', text: 'Bus drivers drive people safely around the town. They stop at each bus stop on time.' },
      { emoji: '🪞', text: 'Bus drivers check their mirrors often. They keep watch for people, bikes and cars all around the bus.' }
    ],
    quiz: [
      { q: 'What do bus drivers carry?', choices: ['People', 'Cakes', 'Sand'], a: 'People' },
      { q: 'What do bus drivers check often?', choices: ['Their mirrors', 'Their hair', 'Their shoes'], a: 'Their mirrors' },
      { q: 'Where do bus drivers stop?', choices: ['At each bus stop', 'In the middle of the road', 'In the sea'], a: 'At each bus stop' }
    ],
    challenge: {
      scene: 'A ball rolls into the road in front of the bus.',
      question: 'Ask a bus driver: what are some ways to stay safe?',
      choices: ['Slow down, keep watch and stop if a child runs out', 'Speed up to get past it', 'Honk and keep going'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what should a bus driver do before setting off?',
      choices: ['Check that everyone is sitting down', 'Turn off the lights and sleep', 'Let a friend drive'],
      a: 'Check that everyone is sitting down'
    }
  },
  'train-driver': {
    learn: [
      { emoji: '🚂', text: 'Train drivers drive trains with lots of people on board. They drive along the tracks.' },
      { emoji: '🚦', text: 'Train drivers watch the signals. A green light means go, and a red light means stop.' }
    ],
    quiz: [
      { q: 'Where do trains travel?', choices: ['Along tracks', 'Over the clouds', 'In a field'], a: 'Along tracks' },
      { q: 'What does a green light mean for a train?', choices: ['Go', 'Stop', 'Sleep'], a: 'Go' },
      { q: 'Who does a train driver take along?', choices: ['Lots of people', 'Only cats', 'Only cars'], a: 'Lots of people' }
    ],
    challenge: {
      scene: 'The signal is red, but there is a long train behind you waiting.',
      question: 'Ask a train driver: what are some ways to keep everyone safe?',
      choices: ['Stop at the red light and tell the control room', 'Go slowly past the red light', 'Turn the signal off yourself'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what colour light tells a train to stop?',
      choices: ['Red', 'Green', 'Blue'],
      a: 'Red'
    }
  },
  sailor: {
    learn: [
      { emoji: '⛵', text: 'Sailors sail boats and keep the ship working on the sea. They use the wind to move the sails.' },
      { emoji: '🧭', text: 'Sailors use a compass and a map to know where they are going.' }
    ],
    quiz: [
      { q: 'What do sailors use to move the boat?', choices: ['The wind', 'Sand', 'Cakes'], a: 'The wind' },
      { q: 'What do sailors use to know where they are going?', choices: ['A compass and a map', 'A spoon', 'A ball'], a: 'A compass and a map' },
      { q: 'Where do sailors work?', choices: ['On the sea', 'In a shop', 'In a library'], a: 'On the sea' }
    ],
    challenge: {
      scene: 'The wind has stopped, and the sails hang limp.',
      question: 'Ask a sailor: what are some ways to keep the boat moving?',
      choices: ['Use the oars and wait for the wind to come back', 'Shout at the sails', 'Jump into the sea and push'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what should a sailor check before leaving the harbour?',
      choices: ['The weather and the sails', 'Whether the fish are hungry', 'The time of the moon'],
      a: 'The weather and the sails'
    }
  },
  lifeguard: {
    learn: [
      { emoji: '🏊', text: 'Lifeguards watch swimmers at the pool or beach and keep them safe.' },
      { emoji: '🛟', text: 'Lifeguards know how to rescue someone who is in trouble in the water.' }
    ],
    quiz: [
      { q: 'What do lifeguards watch?', choices: ['Swimmers', 'Birds', 'Clouds'], a: 'Swimmers' },
      { q: 'Where do lifeguards work?', choices: ['At the pool or beach', 'In a bank', 'On a bus'], a: 'At the pool or beach' },
      { q: 'What do lifeguards know how to do?', choices: ['Rescue people in trouble', 'Fly planes', 'Bake bread'], a: 'Rescue people in trouble' }
    ],
    challenge: {
      scene: 'A swimmer is going further out and seems tired.',
      question: 'Ask a lifeguard: what are some ways to help them get back safely?',
      choices: ['Call them back, use a rescue buoy and get help', 'Wait and see if they swim back', 'Swim out alone without any help'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what should you always do at the pool?',
      choices: ['Walk, do not run, on the side', 'Push other swimmers', 'Dive into the shallow end'],
      a: 'Walk, do not run, on the side'
    }
  },
  'mail-carrier': {
    learn: [
      { emoji: '📮', text: 'Mail carriers deliver letters and parcels to every house in their area.' },
      { emoji: '🏠', text: 'Mail carriers check the addresses carefully, so every letter goes to the right home.' }
    ],
    quiz: [
      { q: 'What do mail carriers deliver?', choices: ['Letters and parcels', 'Trees', 'Rain'], a: 'Letters and parcels' },
      { q: 'Where do mail carriers take the post?', choices: ['To every house in their area', 'To the moon', 'Only to the school'], a: 'To every house in their area' },
      { q: 'What do mail carriers check?', choices: ['The addresses', 'The shoes', 'The stars'], a: 'The addresses' }
    ],
    challenge: {
      scene: 'A parcel has a name on it, but the house number is missing.',
      question: 'Ask a mail carrier: what are some ways to find the right home?',
      choices: ['Look at the street and ask a neighbour or the post office', 'Leave it on the wrong doorstep', 'Keep it and forget about it'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what should a mail carrier check before posting a letter?',
      choices: ['The address on the envelope', 'The colour of the stamp only', 'Whether the letter is heavy'],
      a: 'The address on the envelope'
    }
  },
  librarian: {
    learn: [
      { emoji: '📖', text: 'Librarians help people find books. They know where every book is on the shelves.' },
      { emoji: '📚', text: 'Librarians read a lot and love stories. They suggest books that people might enjoy.' }
    ],
    quiz: [
      { q: 'What do librarians help people find?', choices: ['Books', 'Fish', 'Shoes'], a: 'Books' },
      { q: 'What do librarians know?', choices: ['Where every book is', 'How to fly', 'How to swim'], a: 'Where every book is' },
      { q: 'What do librarians love?', choices: ['Stories', 'Loud noise', 'Rain'], a: 'Stories' }
    ],
    challenge: {
      scene: 'A child wants a book about dinosaurs, but cannot find the right shelf.',
      question: 'Ask a librarian: what are some ways to find the book?',
      choices: ['Look in the animal or science section and ask the librarian', 'Take any book at random', 'Go home without looking'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: how do libraries keep books in order?',
      choices: ['On shelves, in an order that helps you find them', 'Scattered on the floor', 'Under the chairs'],
      a: 'On shelves, in an order that helps you find them'
    }
  },
  photographer: {
    learn: [
      { emoji: '📷', text: 'Photographers take pictures of people, places and special moments.' },
      { emoji: '🌅', text: 'Photographers look at the light. Morning and evening light can make a picture look warm and soft.' }
    ],
    quiz: [
      { q: 'What do photographers take?', choices: ['Pictures', 'Naps', 'Cakes'], a: 'Pictures' },
      { q: 'What makes a picture look warm and soft?', choices: ['Morning or evening light', 'Turning off the lights', 'A very bright flash in the eyes'], a: 'Morning or evening light' },
      { q: 'What do photographers capture?', choices: ['Special moments', 'Only the sky', 'Empty rooms'], a: 'Special moments' }
    ],
    challenge: {
      scene: 'A family wants a photo, but the sun is very bright and the faces look dark.',
      question: 'Ask a photographer: what are some ways to make a better photo?',
      choices: ['Move into the shade and face the light', 'Stand right in the sun', 'Take the photo with your eyes closed'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: where should the sun be for a good photo of a face?',
      choices: ['Behind the photographer', 'Right behind the face', 'Under the table'],
      a: 'Behind the photographer'
    }
  },
  author: {
    learn: [
      { emoji: '🖋️', text: 'Authors write books and stories for people to read. They start with an idea and build it up.' },
      { emoji: '✏️', text: 'Authors write, then read it again and change it. Writing again and again makes a story better.' }
    ],
    quiz: [
      { q: 'What do authors write?', choices: ['Books and stories', 'Cars', 'Roads'], a: 'Books and stories' },
      { q: 'What do authors do after writing?', choices: ['Read it again and change it', 'Throw it away at once', 'Eat it'], a: 'Read it again and change it' },
      { q: 'Where does an author start?', choices: ['With an idea', 'With the ending only', 'With the cover'], a: 'With an idea' }
    ],
    challenge: {
      scene: 'A story feels boring in the middle, and the reader might stop.',
      question: 'Ask an author: what are some ways to make the middle more exciting?',
      choices: ['Add a surprise or a problem for the hero', 'Make the story shorter by skipping the middle', 'Repeat the same sentence many times'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what does every story need to have?',
      choices: ['A hero and a problem', 'Only pictures', 'Only numbers'],
      a: 'A hero and a problem'
    }
  },
  musician: {
    learn: [
      { emoji: '🎸', text: 'Musicians play instruments and make music. Some play with others in a band or an orchestra.' },
      { emoji: '🎵', text: 'Musicians practise the same tune again and again. They listen to each other, so the music sounds good together.' }
    ],
    quiz: [
      { q: 'What do musicians play?', choices: ['Instruments', 'Cars', 'Trees'], a: 'Instruments' },
      { q: 'How do musicians get better?', choices: ['They practise', 'They stop trying', 'They only sleep'], a: 'They practise' },
      { q: 'Why do musicians listen to each other?', choices: ['So the music sounds good together', 'So they can hide', 'So they can eat'], a: 'So the music sounds good together' }
    ],
    challenge: {
      scene: 'Two friends in the band are playing at different speeds.',
      question: 'Ask a musician: what are some ways to play together?',
      choices: ['Count the beat out loud and watch the drummer', 'Each play as fast as you like', 'Stop and never play together again'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what keeps a band playing together?',
      choices: ['A steady beat everyone can follow', 'Everyone playing a different tune', 'Silence'],
      a: 'A steady beat everyone can follow'
    }
  },
  actor: {
    learn: [
      { emoji: '🎭', text: 'Actors pretend to be other people in plays and films.' },
      { emoji: '🎬', text: 'Actors learn their lines and practise with others. They try different voices and faces to show a feeling.' }
    ],
    quiz: [
      { q: 'What do actors pretend to be?', choices: ['Other people', 'Trees', 'Cars'], a: 'Other people' },
      { q: 'Where do actors perform?', choices: ['In plays and films', 'In a bank', 'In a car park'], a: 'In plays and films' },
      { q: 'What do actors learn?', choices: ['Their lines', 'How to fly', 'How to cook'], a: 'Their lines' }
    ],
    challenge: {
      scene: 'In a play, your character is very angry, but you feel silly doing it.',
      question: 'Ask an actor: what are some ways to show anger on stage?',
      choices: ['Use a loud voice and firm, strong movements', 'Whisper the lines', 'Skip the scene'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: how can an actor show that a character is sad?',
      choices: ['A slow voice and droopy shoulders', 'Jumping up and down', 'Giggling the whole time'],
      a: 'A slow voice and droopy shoulders'
    }
  },
  engineer: {
    learn: [
      { emoji: '🔧', text: 'Engineers design and fix machines, bridges and gadgets. They work out how things fit and move.' },
      { emoji: '⚙️', text: 'Engineers test their designs. If something breaks, they find out why and make it stronger.' }
    ],
    quiz: [
      { q: 'What do engineers design?', choices: ['Machines and bridges', 'Songs', 'Cakes'], a: 'Machines and bridges' },
      { q: 'What do engineers do with a design?', choices: ['Test it', 'Throw it in the bin', 'Sleep on it'], a: 'Test it' },
      { q: 'What do engineers do if something breaks?', choices: ['Find out why and make it stronger', 'Hide it', 'Pretend it is fine'], a: 'Find out why and make it stronger' }
    ],
    challenge: {
      scene: 'A bridge made of sticks keeps bending in the middle.',
      question: 'Ask an engineer: what are some ways to make the bridge stronger?',
      choices: ['Add triangle supports across the middle', 'Make the bridge longer', 'Use only one thin stick'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what shape is strongest for holding weight in a bridge?',
      choices: ['A triangle', 'A wiggly line', 'A dot'],
      a: 'A triangle'
    }
  },
  coder: {
    learn: [
      { emoji: '💻', text: 'Coders write instructions for computers. These instructions make apps and games work.' },
      { emoji: '🐞', text: 'Coders test their code. When it does not work, they find the bug and fix it.' }
    ],
    quiz: [
      { q: 'What do coders write?', choices: ['Instructions for computers', 'Letters to friends', 'Shopping lists only'], a: 'Instructions for computers' },
      { q: 'What do coders do with their code?', choices: ['Test it', 'Hide it', 'Eat it'], a: 'Test it' },
      { q: 'What is a bug?', choices: ['A mistake in the code', 'A type of cake', 'A pet'], a: 'A mistake in the code' }
    ],
    challenge: {
      scene: 'A game character walks through walls when it should stop at them.',
      question: 'Ask a coder: what are some ways to find and fix this?',
      choices: ['Check the wall rule and test it step by step', 'Remove all the walls from the game', 'Tell the player it is a feature'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what should a coder do when a game does not work?',
      choices: ['Find the mistake and test it again', 'Turn off the computer and forget it', 'Give up straight away'],
      a: 'Find the mistake and test it again'
    }
  },
  electrician: {
    learn: [
      { emoji: '⚡', text: 'Electricians put in and fix the wires that bring power to buildings. Power makes lights and fridges work.' },
      { emoji: '🔌', text: 'Electricians always switch off the power before they touch a wire. Safety comes first.' }
    ],
    quiz: [
      { q: 'What do electricians put in?', choices: ['Wires that bring power', 'Water pipes only', 'Carpets'], a: 'Wires that bring power' },
      { q: 'What do electricians do before touching a wire?', choices: ['Switch off the power', 'Lick it', 'Shout at it'], a: 'Switch off the power' },
      { q: 'What does power make work?', choices: ['Lights and fridges', 'Rain', 'Snow'], a: 'Lights and fridges' }
    ],
    challenge: {
      scene: 'A lamp in the house keeps flickering, and it is getting dark.',
      question: 'Ask an electrician: what are some ways to find out why?',
      choices: ['Check the bulb and get an electrician to look at the wiring', 'Put your fingers in the socket to see', 'Ignore it and keep the lamp on'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what should you do before you change a light bulb?',
      choices: ['Switch the lamp off and let it cool', 'Pour water on it', 'Put a fork in the socket'],
      a: 'Switch the lamp off and let it cool'
    }
  },
  hairdresser: {
    learn: [
      { emoji: '💇', text: 'Hairdressers cut, wash and style hair. They ask how the person wants their hair to look.' },
      { emoji: '✂️', text: 'Hairdressers are careful with scissors. They cut a little at a time, so the hair looks just right.' }
    ],
    quiz: [
      { q: 'What do hairdressers do?', choices: ['Cut, wash and style hair', 'Drive buses', 'Grow carrots'], a: 'Cut, wash and style hair' },
      { q: 'What do hairdressers ask first?', choices: ['How the person wants their hair', 'The weather', 'What the time is'], a: 'How the person wants their hair' },
      { q: 'How do hairdressers cut hair?', choices: ['A little at a time', 'All at once', 'With their eyes closed'], a: 'A little at a time' }
    ],
    challenge: {
      scene: 'A customer wants a short haircut, but they are worried it will look silly.',
      question: 'Ask a hairdresser: what are some ways to help them feel happy with it?',
      choices: ['Show them a picture and cut a little at a time', 'Cut it very short straight away', 'Tell them it is too late to change'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what should a hairdresser do before they start cutting?',
      choices: ['Ask what style the customer wants', 'Start with the scissors', 'Shave the whole head'],
      a: 'Ask what style the customer wants'
    }
  },
  florist: {
    learn: [
      { emoji: '💐', text: 'Florists make bunches of flowers for people to give to friends, family and at special events.' },
      { emoji: '🌸', text: 'Florists pick flowers that go well together. They trim the stems so the flowers can drink water.' }
    ],
    quiz: [
      { q: 'What do florists make?', choices: ['Bunches of flowers', 'Bicycles', 'Bread'], a: 'Bunches of flowers' },
      { q: 'Why do florists trim the stems?', choices: ['So the flowers can drink water', 'So the flowers can fly', 'So the flowers can sing'], a: 'So the flowers can drink water' },
      { q: 'What do florists think about when they choose flowers?', choices: ['Which ones go well together', 'Which ones are the heaviest', 'Which ones are on the ground'], a: 'Which ones go well together' }
    ],
    challenge: {
      scene: 'A customer wants flowers for a friend who likes only one colour.',
      question: 'Ask a florist: what are some ways to make a bunch just for them?',
      choices: ['Use a mix of their favourite colour with some green leaves', 'Pick flowers at random', 'Make the bunch without any flowers'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what should a florist do with the stems before putting them in water?',
      choices: ['Trim them at a slant', 'Tie them in knots', 'Dip them in paint'],
      a: 'Trim them at a slant'
    }
  },
  tailor: {
    learn: [
      { emoji: '🧵', text: 'Tailors sew and mend clothes, so they fit well. They measure the person first.' },
      { emoji: '📏', text: 'Tailors take in or let out seams, so a jumper or a skirt fits just right.' }
    ],
    quiz: [
      { q: 'What do tailors sew?', choices: ['Clothes', 'Cars', 'Walls'], a: 'Clothes' },
      { q: 'What do tailors do first?', choices: ['Measure the person', 'Paint the cloth', 'Cut the cloth in half and stop'], a: 'Measure the person' },
      { q: 'What do tailors change so clothes fit?', choices: ['The seams', 'The sky', 'The stars'], a: 'The seams' }
    ],
    challenge: {
      scene: 'A child\'s new coat is too big in the arms.',
      question: 'Ask a tailor: what are some ways to make the coat fit better?',
      choices: ['Take in the sleeves and check the fit again', 'Let the arms out even more', 'Tell the child to grow into it straight away'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what should a tailor do before cutting the cloth?',
      choices: ['Measure carefully', 'Cut it quickly', 'Throw the cloth away'],
      a: 'Measure carefully'
    }
  },
  beekeeper: {
    learn: [
      { emoji: '🐝', text: 'Beekeepers look after bees and collect their honey. They keep the bee homes, called hives, tidy and dry.' },
      { emoji: '🧑‍🌾', text: 'Beekeepers wear a special suit and a veil, to stay safe. They move slowly, so the bees stay calm.' }
    ],
    quiz: [
      { q: 'What do beekeepers collect?', choices: ['Honey', 'Sand', 'Stones'], a: 'Honey' },
      { q: 'What do beekeepers wear to stay safe?', choices: ['A special suit and a veil', 'Swimming goggles', 'A cape'], a: 'A special suit and a veil' },
      { q: 'Why do beekeepers move slowly?', choices: ['So the bees stay calm', 'So they can nap', 'So the honey dries'], a: 'So the bees stay calm' }
    ],
    challenge: {
      scene: 'A bee is buzzing close to a child in the garden.',
      question: 'Ask a beekeeper: what are some ways to keep everyone safe and the bee calm?',
      choices: ['Stay still and let the bee fly away on its own', 'Swat at the bee', 'Run and shout'],
      starter: 'I would ___ because ___.'
    },
    task: {
      prompt: 'First pass: what should a beekeeper do before opening a hive?',
      choices: ['Put on the suit and veil', 'Take off all their clothes', 'Shout at the bees'],
      a: 'Put on the suit and veil'
    }
  }
});
