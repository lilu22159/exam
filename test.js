// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;
    const slideInterval = setInterval(nextSlide, 3000); // 自动播放，每3秒切换一次

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    prevButton.addEventListener('click', () => {
        clearInterval(slideInterval); // 停止自动播放
        prevSlide();
        setTimeout(() => {
            slideInterval = setInterval(nextSlide, 3000); // 恢复自动播放
        }, 500); // 延迟一段时间后恢复自动播放，防止用户快速点击导致的问题
    });

    nextButton.addEventListener('click', () => {
        clearInterval(slideInterval); // 停止自动播放
        nextSlide();
        setTimeout(() => {
            slideInterval = setInterval(nextSlide, 3000); // 恢复自动播放
        }, 500); // 延迟一段时间后恢复自动播放
    });

    // 初始化显示第一张轮播图
    showSlide(currentIndex);
});