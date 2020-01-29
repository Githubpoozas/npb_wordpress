<?php
/**
 * The template for displaying the footer.
 *
 * Contains footer content and the closing of the main and #page div elements.
 *
 * @since 1.0.0
 */
$bavotasan_theme_options = bavotasan_theme_options();
?>
	</main><!-- main -->

    <!-- social media bar -->
    <div class="socialmedia d-none d-md-block" id="socialmedia">
      <input
        type="checkbox"
        class="socialmedia__checkbox"
        id="socialmedia-toggle"
      />
      <label for="socialmedia-toggle" class="socialmedia__button">
        <div class="socialmedia__icon">
          <img src="../img/socialmedia/arrow.svg" alt="" />
        </div>
      </label>
      <nav class="socialmedia__nav">
        <ul class="socialmedia__list">
          <li class="socialmedia__item">
            <a href="https://wa.me/66817741166" target="_blank"><img class="btn-shadow" src="../img/socialmedia/whatsapp.svg" alt=""/></a>
          </li>
          <li class="socialmedia__item">
            <a href="https://www.facebook.com/130047820416542/" target="_blank">
              <img class="btn-shadow" src="../img/socialmedia/facebook.svg" alt=""/>
            </a>
          </li>
          <li class="socialmedia__item">
            <a href="http://line.me/ti/p/~nicknoproblem" target="_blank"><img class="btn-shadow" src="../img/socialmedia/line.svg" alt=""/></a>
          </li>
          <li class="socialmedia__item">
            <a href="https://m.me/Noproblemtshirt/" target="_blank"><img class="btn-shadow" src="../img/socialmedia/messenger.svg" alt=""/></a>
          </li>
          <li class="socialmedia__item">
            <a href="weixin://dl/chat?nicknoproblem"><img class="btn-shadow" src="../img/socialmedia/wechat.svg" alt=""/></a>
          </li>
        </ul>
      </nav>
      <label class="socialmedia__rotated" lang="th" for="socialmedia-toggle"
        >ติดต่อสอบถามได้ที่</label
      >
    </div>

    <!-- footer -->
    <footer class="footer" lang="th">
      <div class="footer__box">
        <div class="footer__logo">
          <img src="../img/noproblem_logo.svg" alt="" />
        </div>
        <div class="footer__contacts">
          <div class="footer__contact footer__contact-1" lang="en">
            <p class="footer__name">CONTACT</p>
          </div>
          <div class="footer__contact footer__contact-2">
            <p>
              เลขที่ 127 ซ.สุขสวัสดิ์ 14/19 แขวงจอมทอง เขตจอมทอง กทม 10150
            </p>
          </div>
          <div class="footer__contact footer__contact-3">
            <p>โทรศัพท์</p>
            <p><a href="tel:066-165-1987">0-2460-2200-11</a></p>
            <p>แฟกซ์</p>
            <p><a href="tel:024761866">0-2476-1866</a></p>
          </div>
          <div class="footer__contact footer__contact-4">
            <p>เวลาทำการ จันทร์-เสาร์ เวลา 08:00-17:00</p>
          </div>
        </div>
        <div class="footer__socials">
          <div class="footer__social footer__social-1" lang="en">
            <p class="footer__name">SOCIAL MEDIA</p>
          </div>
          <div class="footer__social footer__social-2">
            <a href="https://wa.me/66817741166" target="_blank"><img class="btn-shadow" src="../img/socialmedia/whatsapp.svg" alt=""/></a>
            <a href="https://www.facebook.com/130047820416542/" target="_blank">
              <img class="btn-shadow" src="../img/socialmedia/facebook.svg" alt=""/>
            </a>
            <a href="http://line.me/ti/p/~nicknoproblem" target="_blank"><img class="btn-shadow" src="../img/socialmedia/line.svg" alt=""/></a>
            <a href="https://m.me/Noproblemtshirt/" target="_blank"><img class="btn-shadow" src="../img/socialmedia/messenger.svg" alt=""/></a>
            <a href="weixin://dl/chat?nicknoproblem" ><img class="btn-shadow" src="../img/socialmedia/wechat.svg" alt=""/></a>
          </div>
          <div class="footer__social footer__social-3">
            <p>CALL</p>
            <p><a href="tel:0817741166">081-774-1166</a></p>
          </div>
          <div class="footer__social footer__social-4">
            <p>EMAIL</p>
            <p><a href="mailto:nicknoproblem@gmail.com">nicknoproblem@gmail.com</a></p>
          </div>
        </div>
      </div>
    </footer>

    <div class="footer__whitebar"></div>
	
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>