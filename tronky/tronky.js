/// reading 23

var part1_23=["long", "infomation/detail","copy", "busy","client"]
var part2_23=["when","take","show","he","cau con lai"]
var part3_23=["they","this","as", "fortune","cau con lai"]
var part4_23=["thông tin có đúng là anh an bỏ ba à"]
var part5_23=[
    "sysmbols of",
    "open public for everyone",
    "from amusement to industrial",
    "away from...to greate freedom",
    "diffirent...values",
    "modern zoo alternative",
    "a new mission"
]


/// reading 23
var part1_14=["window", "buy","market", "cakes","watch"]
var part2_14=["when","he soon","he almost","the","this"]
var part3_14=["first","next","then ", "you can","in"]
var part4_14=["đóng của ăn buồi thì có đóng cửa không "]
var part5_14=[
    "dicken for our time",
    "diffirent",
    "keep",
    "influence/ anh huong",
    "early success",
    "try to protect",
    "book to life"
]

var part1_3=["near", "friendly","practice", "read","so"]
var part2_3=["in","when","drag","once","cau con lai"]
var part3_3=["this created","as result","they", "fortunately","cau con lai"]
var part4_3=["cac ban oi  dáp án a đc  /  C B D A A D C"]
var part5_3=[
    "The custom",
    "coffe ancouraging",
    "a habit",
    "problem",
    "a remedy",
    "the health",
    "orinate/origin"
]


var part1_29=["just", "too","to", "some","give"]
var part2_29=["go","choose","end","when","at"]
var part3_29=["the first","in order to","the most", "factor","such as"]
var part4_29=["an ặc quá to ban bắt cô ấy đúng không  /  A A B B C A D"]
var part5_29=[
    "types",
    "various",
    "possible",
    "factory",
    "report",
    "healthy",
    "out"
]

var part1_10=["late", "meeting","park", "shop","cook"]
var part2_10=["they left","hight school","good at","at one of these","famous actor"]
var part3_10=["all you need is","an oll potato","this colour", "pot","dua ra nang va tuoi nuoc / water", "cham soc quan sat phat trien (development)"]
var part4_10=["muon an cái đầu buồi chỉ duy danh  / A C D B C D D"]
var part5_10=[
    "physically demanding",
    "boost memory",
    "social cycle",
    "routines",
    "emotion",
    "other people's feeling",
    "develope sence of well-being"
]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


// Trộn các mảng
shuffleArray(part1_23);
shuffleArray(part2_23);
shuffleArray(part3_23);
shuffleArray(part4_23);
shuffleArray(part5_23);

shuffleArray(part1_14);
shuffleArray(part2_14);
shuffleArray(part3_14);
shuffleArray(part4_14);
shuffleArray(part5_14);


shuffleArray(part1_3);
shuffleArray(part2_3);
shuffleArray(part3_3);
shuffleArray(part4_3);
shuffleArray(part5_3);

shuffleArray(part1_29);
shuffleArray(part2_29);
shuffleArray(part3_29);
shuffleArray(part4_29);
shuffleArray(part5_29);

shuffleArray(part1_10);
shuffleArray(part2_10);
shuffleArray(part3_10);
shuffleArray(part4_10);
shuffleArray(part5_10);

function createInputElement(item) {
    return `<div className='divs'><p>${item}</p><input type='text' placeholder='Your answer'></div>`;
}
// In kết quả
// Hiển thị kết quả trên HTML
// Hiển thị kết quả trên HTML với xuống dòng
// Hiển thị kết quả trên HTML với mỗi cặp chiếm một dòng
document.getElementById('part1_23').innerHTML = "<div><p>Part 1:</p>" + part1_23.map(createInputElement).join("") + "</div>";
document.getElementById('part2_23').innerHTML = "<div><p>Part 2:</p>" + part2_23.map(createInputElement).join("") + "</div>";
document.getElementById('part3_23').innerHTML = "<div><p>Part 3:</p>" + part3_23.map(createInputElement).join("") + "</div>";
document.getElementById('part4_23').innerHTML = "<div><p>Part 4:</p>" + part4_23.map(createInputElement).join("") + "</div>";
document.getElementById('part5_23').innerHTML = "<div><p>Part 5:</p>" + part5_23.map(createInputElement).join("") + "</div>";
//Trong đoạn mã trên, mỗi phần được bao quanh bởi một thẻ <div>



document.getElementById('part1_14').innerHTML = "<div><p>Part 1:</p>" + part1_14.map(createInputElement).join("") + "</div>";
document.getElementById('part2_14').innerHTML = "<div><p>Part 2:</p>" + part2_14.map(createInputElement).join("") + "</div>";
document.getElementById('part3_14').innerHTML = "<div><p>Part 3:</p>" + part3_14.map(createInputElement).join("") + "</div>";
document.getElementById('part4_14').innerHTML = "<div><p>Part 4:</p>" + part4_14.map(createInputElement).join("") + "</div>";
document.getElementById('part5_14').innerHTML = "<div><p>Part 5:</p>" + part5_14.map(createInputElement).join("") + "</div>";


document.getElementById('part1_3').innerHTML = "<div><p>Part 1:</p>" + part1_3.map(createInputElement).join("") + "</div>";
document.getElementById('part2_3').innerHTML = "<div><p>Part 2:</p>" + part2_3.map(createInputElement).join("") + "</div>";
document.getElementById('part3_3').innerHTML = "<div><p>Part 3:</p>" + part3_3.map(createInputElement).join("") + "</div>";
document.getElementById('part4_3').innerHTML = "<div><p>Part 4:</p>" + part4_3.map(createInputElement).join("") + "</div>";
document.getElementById('part5_3').innerHTML = "<div><p>Part 5:</p>" + part5_3.map(createInputElement).join("") + "</div>";


document.getElementById('part1_29').innerHTML = "<div><p>Part 1:</p>" + part1_29.map(createInputElement).join("") + "</div>";
document.getElementById('part2_29').innerHTML = "<div><p>Part 2:</p>" + part2_29.map(createInputElement).join("") + "</div>";
document.getElementById('part3_29').innerHTML = "<div><p>Part 3:</p>" + part3_29.map(createInputElement).join("") + "</div>";
document.getElementById('part4_29').innerHTML = "<div><p>Part 4:</p>" + part4_29.map(createInputElement).join("") + "</div>";
document.getElementById('part5_29').innerHTML = "<div><p>Part 5:</p>" + part5_29.map(createInputElement).join("") + "</div>";


document.getElementById('part1_10').innerHTML = "<div><p>Part 1:</p>" + part1_10.map(createInputElement).join("") + "</div>";
document.getElementById('part2_10').innerHTML = "<div><p>Part 2:</p>" + part2_10.map(createInputElement).join("") + "</div>";
document.getElementById('part3_10').innerHTML = "<div><p>Part 3:</p>" + part3_10.map(createInputElement).join("") + "</div>";
document.getElementById('part4_10').innerHTML = "<div><p>Part 4:</p>" + part4_10.map(createInputElement).join("") + "</div>";
document.getElementById('part5_10').innerHTML = "<div><p>Part 5:</p>" + part5_10.map(createInputElement).join("") + "</div>";