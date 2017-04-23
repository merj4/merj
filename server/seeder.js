var db = require('./db.js');
//run this file node seeder.js to populate the database
//create variables for each table
var User = db.User;
var Event = db.Event;
// var Message = db.Message;
var EventParticipant = db.EventParticipant;
// Hit me with them ghetto delays to let the tables procreate - Jason Kim
//wait 2000ms for the tables above to be created
setTimeout(function() {
  seedData();
}, 2000);
//add data to database
var seedData = function() {
  // Drop it like it's hot
  console.log('Dropping and re-creating tables');
  Event.sync({force: true})
  .then(() => User.sync({force: true}))
  // .then(() => Message.sync({force: true}))
  .then(() => EventParticipant.sync({force: true}))
  // Insert default events
  .then(() => Event.create({
    location: "Santa Barbara, CA",
    date: "Aug. 10, 2017",
    title: "Sandy Barbie",
    time: "2:00 pm",
    category: "Outdoor",
    description: "Come out to the beach and enjoy company, food and sand castles",
    image: "http://www.unique-canvas.com/media/images/popup/meer-und-traumstraende-fotografie--fotomotiv-beach-party--816406.jpg"
  }))
  .then(() => Event.create({
    location: "Lake Tahoe, CA",
    date: "Aug. 10, 2017",
    title: "A Sunday Hike",
    time: "2:00 pm",
    category: "Outdoor",
    description: "Come out to the beach and enjoy company, food and sand castles",
    image: "https://s-media-cache-ak0.pinimg.com/originals/62/f0/48/62f04865010d469b7f44dac815d916df.jpg"
  }))
  .then(() => Event.create({
    location: "Berkeley, CA",
    date: "Aug. 10, 2017",
    title: "Berkeley Babes",
    time: "2:00 pm",
    category: "Outdoor",
    description: "Get rekt. Hype. Bonfire. Beach. Drinks. Food.",
    image: "http://media.new.mensxp.com/media/content/2015/May/wildestbeachpartydestinationsintheworldforsinglemen0_1431689937_980x457.jpg"
  }))
  .then(() => Event.create({
    location: "Santa Monica, CA",
    date: "Aug. 10, 2017",
    title: "Arcade Game Night",
    time: "8:00 pm",
    category: "Outdoor",
    description: "Release your inner child and let loose on your favorite arcade games!",
    image: "http://i.huffpost.com/gen/1556614/images/o-SANTA-MONICA-facebook.jpg"
  }))
  .then(() => Event.create({
    location: "San Francisco, CA",
    date: "Aug. 10, 2017",
    title: "San Fun-cisco Happy Time",
    time: "2:00 pm",
    category: "Outdoor",
    description: "Come out to the beach and enjoy company, food and sand castles",
    image: "http://cdn.sosueme.ie/wp-content/uploads/2016/01/1_best_party_beach_South_Beach_Miami_Florida-e1399908931396.jpg"
  }))
  .then(() => Event.create({
    location: "Malibu, CA",
    date: "Aug. 10, 2017",
    title: "Be free, be young, be Malibu",
    time: "2:00 pm",
    category: "Outdoor",
    description: "Be free, be young, be Malibu.",
    image: "http://www.winterparty.com/sites/www.winterparty.com/files/styles/project_1126_470/public/BeachPartySlider1_0.jpg?itok=5eB_59TL"
  }))
  .then(() => Event.create({
    location: "San Luis Obispo, CA",
    date: "Aug. 10, 2017",
    title: "Sandy in the S.L.O. Cali",
    time: "2:00 pm",
    category: "Outdoor",
    description: "Come out to the beach and enjoy company, food and sand castles",
    image: "http://www.loadednightclub.co.uk/wp-content/uploads/sites/2/2015/05/4dadc304234cad1821315e885c04c01d.jpg"
  }))
  .then(() => Event.create({
    location: "Oakland, CA",
    date: "Aug. 10, 2017",
    title: "Oakland First Fridays",
    time: "2:00 pm",
    category: "Outdoor",
    description: "Get rekt. Hype. Bonfire. Beach. Drinks. Food.",
    image: "https://bryanallo.files.wordpress.com/2013/04/9q1a6291_blog.jpg"
  }))
  .then(() => Event.create({
    location: "San Diego, CA",
    date: "Aug. 10, 2017",
    title: "Spend the day drinking a mai tai",
    time: "2:00 pm",
    category: "Outdoor",
    description: "Come out and play this Friday night. Meet new friends!",
    image: "https://s-media-cache-ak0.pinimg.com/originals/55/25/fe/5525fed7f7af445653e3973b24be7559.jpg"
  }))
  .then(() => Event.create({
    location: "Yosemite, CA",
    date: "Aug. 10, 2017",
    title: "Bouldering and Hot Springs",
    time: "2:00 pm",
    category: "Outdoor",
    description: "Be free, be young, be Malibu.",
    image: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2014/10/yosemite.jpg"
  }))
  // Insert some users
  .then(() => User.create({ username: "Test User", email: "test@socially.com:", image: "http://www.cutestpaw.com/wp-content/uploads/2013/12/Most-Famous-Felines-001.jpg"}))
  // Create joins
  .then(() => EventParticipant.create({ UserId: 1, EventId: 1 }));
  // .then(() => Language.create({ name: 'html', displayname: 'HTML' }))
  // .then(() => Language.create({ name: 'javascript', displayname: 'Javascript' }))
  // .then(() => Language.create({ name: 'json', displayname: 'JSON' })) //5
  // .then(() => Language.create({ name: 'jsx', displayname: 'JSX' }))
  // .then(() => Language.create({ name: 'markdown', displayname: 'Markdown' }))
  // .then(() => Language.create({ name: 'text', displayname: 'Plain Text' }))
  // .then(() => Language.create({ name: 'pgsql', displayname: 'PostgreSQL' }))
  // .then(() => Language.create({ name: 'python', displayname: 'Python' }))
  // .then(() => Language.create({ name: 'sass', displayname: 'Sass' })) //10
  // .then(() => Language.create({ name: 'scss', displayname: 'SCSS' }))
  // .then(() => Language.create({ name: 'sql', displayname: 'SQL' }))
  // .then(() => Language.create({ name: 'typescript', displayname: 'Typescript' }))
  // .then(() => Language.create({ name: 'xml', displayname: 'XML' }));  //15
  // Insert dummy snippets and code samples directly after each snippet
  // .then(() =>
  //   Snippet.create({
  //     title: "Welcome!",
  //     snippet: JSON.stringify("var x = \"hello\";\n\nvar print = function () {\n    console.log(x);\n};"),
  //     "shortDescription": "Dummy shortDescription 1",
  //     explanation: JSON.stringify("Sample Explanation"),
  //     "TopicId": 3,
  //     "LanguageId": 4
  //   }).then(function (snippet) {
  //     SnippetTag.create({ SnippetId: snippet.id, TagId: 7 });
  //   }))
  // .then(() =>
  //   CodeSample.create({
  //     "codeSample": JSON.stringify("Test code sample 1"),
  //     "SnippetId": 1
  //   }));
};