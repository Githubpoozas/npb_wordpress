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
          <img src="../wp-content/themes/noproblem/library/images/socialmedia/arrow.svg" alt="" />
        </div>
      </label>
      <nav class="socialmedia__nav">
        <ul class="socialmedia__list">
          <li class="socialmedia__item">
            <a href="#"><img class="btn-shadow" src="../wp-content/themes/noproblem/library/images/socialmedia/whatsapp.svg" alt=""/></a>
          </li>
          <li class="socialmedia__item">
            <a href="#"><img class="btn-shadow" src="../wp-content/themes/noproblem/library/images/socialmedia/facebook.svg" alt=""/></a>
          </li>
          <li class="socialmedia__item">
            <a href="#"><img class="btn-shadow" src="../wp-content/themes/noproblem/library/images/socialmedia/line.svg" alt=""/></a>
          </li>
          <li class="socialmedia__item">
            <a href="#"><img class="btn-shadow" src="../wp-content/themes/noproblem/library/images/socialmedia/messenger.svg" alt=""/></a>
          </li>
          <li class="socialmedia__item">
            <a href="#"><img class="btn-shadow" src="../wp-content/themes/noproblem/library/images/socialmedia/wechat.svg" alt=""/></a>
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
          <img src="../wp-content/themes/noproblem/library/images/logo/noproblem_logo.svg" alt="" />
        </div>
        <div class="footer__contacts">
          <div class="footer__contact footer__contact-1" lang="en">
            <p class="footer__name">CONTACT</p>
          </div>
          <div class="footer__contact footer__contact-2">
            <p>
              ที่อยู่ 58/17 ซอย 14/19 ถนนสุขสวัสดิ์ แขวงจอมทอง เขตจอมทอง
              กรุงเทพมหานคร 10150
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
            <a href="#"><img class="btn-shadow" src="../wp-content/themes/noproblem/library/images/socialmedia/whatsapp.svg" alt=""/></a>
            <a href="#"><img class="btn-shadow" src="../wp-content/themes/noproblem/library/images/socialmedia/facebook.svg" alt=""/></a>
            <a href="#"><img class="btn-shadow" src="../wp-content/themes/noproblem/library/images/socialmedia/line.svg" alt=""/></a>
            <a href="#"><img class="btn-shadow" src="../wp-content/themes/noproblem/library/images/socialmedia/messenger.svg" alt=""/></a>
            <a href="#"><img class="btn-shadow" src="../wp-content/themes/noproblem/library/images/socialmedia/wechat.svg" alt=""/></a>
          </div>
          <div class="footer__social footer__social-3">
            <p>CALL</p>
            <p><a href="tel:02460220011">0-2460-2200-11</a></p>
          </div>
          <div class="footer__social footer__social-4">
            <p>EMAIL</p>
            <p><a href="mailto:test@test.com">test@test.com</a></p>
          </div>
        </div>
      </div>
    </footer>
	<div class="footer__whitebar"></div>
	
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>