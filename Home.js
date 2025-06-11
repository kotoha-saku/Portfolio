console.log('hello');
// #slide内のimgタグを全て取得
const images = document.querySelectorAll('#slide img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const indicator = document.getElementById('indicator');
let currentIndex = 0;

//インジケーター用の点を生成
const dots = [];
images.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('indicator-dot');
    indicator.appendChild(dot);
    dots.push(dot);
});

//今表示すべき画像だけに.activeクラスを追加
function showImage(index){
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index); //インジケーター追加
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});


//初期表示
showImage(currentIndex);