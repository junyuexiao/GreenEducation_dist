<template>
  <div id="aboutusapp">
    <div class="text-content">
      <div class="about pilicy">
        <div class="title">Policy</div>
        <p class="content">
          This privacy policy covers situations where we, green education, access, collect, store process, use, disclose or transfer your personal information in paper or electronic form. It also covers situations where approved partners or other members of Kering use your personal information on our behalf.
          In some cases, other policies apply to you. It may be the case when you use certain products or services, and in this event:
        </p>
        <p class="content">
          - You will be notified of these other policies while using the products or services they apply to.
        </p>
        <p class="content">
          - Such policies will supersede this privacy policy unless they expressly refer to it.
        </p>
        <p class="content">
          This privacy policy does not cover products or services you might use as provided by other companies acting on their own account.
          Our privacy policy does not extend to services provided by other companies acting on their own account, such as franchisees and licensees or when you share information through social media (WeChat, WhatsApp, Baidu, Kakao Talk, Facebook, Twitter, Instagram, etc.), or other online platforms owned and managed by other companies. These other companies have their own privacy policies in place, so remember that the way they use any personal information you give them will be subject to their rules and not ours.
        </p>
      </div>
      <div class="about Tems">
        <div class="title">Terms</div>
        <p class="content">Welcome to www. green education.com website (hereinafter the "Website"). PLEASE READ THE FOLLOWING TERMS AND CONDITIONS OF USE OF THE WEBSITE (HEREINAFTER THE "TERMS OF USE") CAREFULLY BEFORE USING THE WEBSITE. The Terms of Use govern the access to, and use of, the Website and the content and services available through the Website (“Services”). Use of the Website and of the Services constitutes your full acceptance of these Terms of Use and all guidelines and rules, including but not limited to the Privacy Policy referred to in Section 14 (below) and any other additional terms, conditions, or policies referenced herein and/or available by hyperlink, and of their relevant mandatory nature. These Terms of Use shall apply to all users of the Website, including without limitation vendors, customers, merchants, and/or contributors. When registering to use the Website and the Services, you will be asked to agree to be bound by these Terms of Use. You are only authorized to use the Website and the Services if you agree to abide by all applicable laws and the terms of these Terms of Use and you indicate your acceptance during the registration, or subscription, process. If these Terms of Use are construed as an offer, acceptance is limited expressly to these Terms of Use. If you (hereinafter, also “User”) do not agree to be bound by these Terms of Use and to abide by all applicable laws, you may not use the Website or the Services. By use of the Website and/or Services, User hereby consents to the admissibility of a printed copy of these Terms of Use in any judicial, administrative, or other proceeding based on or relating to the Website, Services, or the use thereof, to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. Green education reserves the right, at its sole discretion, to modify these Terms of Use from time to time, in which case we will post the revised Terms of Use on this Website and update the "Last Updated" date to reflect the date of the changes. Please consult these Terms of Use regularly. The use of the Website and the Services by you after such modifications have been posted constitutes your full acceptance of the then-current Terms of Use. If you do not agree with the Terms of Use at any time, you may not continue to use the Website or the Services.</p>
      </div>
      <div class="about FAQS">
        <div class="title">FAQS</div>
        <p class="content">Why the game is not all unlocked?
          Because this program is still under development, only the first three levels are open. With the development of the program, the website will provide more knowledge.
          Why is the puzzle not all unlocked？
          Because this program is still in development, we can only get one star red puzzle of level 1-2 and two stars orange puzzle of level 3. With the development of the program, the website will provide more puzzles</p>
      </div>
      <div class="about Support">
        <div class="title">support</div>
        <p class="content">Due to the lack of database, the website can not provide users with login. The website uses persona interface to help users log in.
          The website game is still in the development, at present only provides the first three level of the game service</p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-title"><span class="line">-——-</span> Contact us <span class="line">-——-</span></div>
      <div class="social">
        <div class="top">
          <span>
            <font-awesome-icon
                               class="icon"
                               :icon="['fab','facebook']" />Facebook</span>
          <span>
            <font-awesome-icon
                               class="icon"
                               :icon="['fab','instagram']" />Instagram</span>
        </div>
        <div class="bottom">
          <span>
            <font-awesome-icon
                               class="icon"
                               :icon="['fab','twitter']" />Twitter</span>
          <span>
            <font-awesome-icon
                               class="icon"
                               :icon="['fab','youtube']" />Youtube</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Aboutus'
  }
</script>

<style lang="less">
  #aboutusapp {
    width: 100vw;
    height: auto;
    background: url('./assets/bg.jpg') 50% 50% no-repeat;
    background-size: cover;
    padding-top: 1rem;
    padding-bottom: 6rem;
    margin-top: -2rem;

    .text-content {
      margin: 2rem 10rem;
      line-height: 1.4rem;

      @media screen and (max-width: 1024px) {
        margin: 0;
        padding: 40px;
      }

      .about {
        .title {
          color: #fff;
          font-weight: 500;
          font-size: 1.7rem;
          margin: 3rem 0;

          @media screen and (max-width: 1024px) {
            text-align: center;
          }
        }

        p {
          margin-left: 3rem;
          color: rgb(18, 94, 47);
          letter-spacing: 1px;
          word-spacing: 2px;

          @media screen and (max-width: 1024px) {
            margin: .4rem;
          }
        }
      }
    }

    .footer {
      margin-top: 4rem;

      .footer-title {
        font-size: 2rem;
        font-weight: bolder;
        text-align: center;
        color: #fff;

        @media screen and (max-width: 1024px) {
          font-size: 1.4rem;
          color: #fff;
        }

        .line {
          font-size: 2.5rem;
          color: rgb(13, 85, 73);

          @media screen and (max-width: 1024px) {
            font-size: 1rem;
            color: rgb(13, 85, 73);
          }
        }


      }

      .social {
        width: 100%;
        // height: 20vh;
        height: auto;
        background: rgb(221, 143, 107);
        text-align: center;
        margin-top: 5rem;


        span {
          display: inline-block;
          margin: 2.5rem;
          font-size: 1.3rem;
          color: #fff;
        }

        .icon {
          margin-right: 1rem;
          font-weight: bolder;
          font-size: 3rem;
          color: rgb(118, 160, 123);
          transform: translateY(.6rem);
        }
      }
    }
  }
</style>