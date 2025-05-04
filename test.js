document.addEventListener("DOMContentLoaded", function () {
    const targets = document.querySelectorAll(".section2-1, .section2-3, .section2-2, .section2-4, .section2-5, .section4, .page-title");
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in");
          observer.unobserve(entry.target); // 一度だけ発火
        }
      });
    }, {
      threshold: 0.3 // 少し表示されたら発火
    });
  
    targets.forEach(target => observer.observe(target));
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".wrapper, .wrapper2, .wrapper3"); // 各セクションの要素
    const navLinks = document.querySelectorAll(".nav li"); // ナビゲーションリンク

    // IntersectionObserverの設定
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const targetId = entry.target.id;
            const navLink = document.querySelector(`.nav li a[href="#${targetId}"]`);
            
            if (entry.isIntersecting) {
                // セクションが表示されたとき、対応するリンクにactiveクラスを追加
                navLink.parentElement.classList.add("active");
            } else {
                // セクションが非表示になったとき、対応するリンクからactiveクラスを削除
                navLink.parentElement.classList.remove("active");
            }
        });
    }, {
        threshold: 0.5 // 50%以上が表示された場合に発火
    });

    sections.forEach(section => {
        observer.observe(section); // 各セクションを監視
    });
});
