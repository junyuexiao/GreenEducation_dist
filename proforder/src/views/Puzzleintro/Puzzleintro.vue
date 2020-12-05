<template>
  <div id="puzzleintroapp">
    <div class="intro">
      <div class="title">
        <p>Enviromental </p>
        <p>friendly item description</p>
      </div>
      <div class="subtitle st">save kola game</div>
      <div class="thing st">{{ thing }}</div>
    </div>
    <div class="content">
      <div class="img">
        <div class="thing-img"
             :style="{backgroundImage:`url(${cover})`}"></div>
      </div>
      <div class="msg">{{msg}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'puzzleintroapp',
    data: () => ({
      thing: '',
      msg: '',
      cover: '',
    }),
    async created() {
      this.thing = this.$route.query.id
      switch (this.thing) {
      case 'Scratch Paper':

        this.cover = require('../Puzzle/assets/ScratchPaper.png')
        this.msg = 'Young adults could reuse scratch paper as much as possible when they write down anything as draft. They can also save work paper in their offices, because it can reduce the number of cutting trees. Recycling of paper can also save many kinds of resources. Based on the research “Each ton (2000 pounds) of recycled paper can save 17 trees, 380 gallons of oil, three cubic yards of landfill space, 4000 kilowatts of energy, and 7000 gallons of water. This represents a 64% energy savings, a 58% water savings, and 60 pounds less of air pollution” (University of Southern Indiana,2020). Saving paper is to protect forest resources and the environment. Trees can absorb carbon dioxide, “trees—all plants, in fact—use the energy of sunlight, and through the process of photosynthesis they take carbon dioxide (CO2) from the air and water from the ground” (Leahy, 2019). Trees can also curb greenhouse gas emissions “An area the size of the United States could be restored as forests with the potential of erasing nearly 100 years of carbon emissions” (Leahy, 2019), thereby reducing the problem of climate change. The individual behaviors of the people automatically make their friends and other close people to follow any distinct habit. The human behavior strongly affects the people around him/ herself (Isen, 2003). And the behaviors of young adults are mostly followed by other people. That is why young adults should practice these properly. '
        break;
      case 'Non-disposable tableware':
        this.cover = require('../Puzzle/assets/tableware.png')
        this.msg = 'Young adults could try to bring their own lunchboxes and cutlery when you eat in the Office or anywhere outside home. They can also take non-disposable tableware, when they go for picnic. Based on the “New research shows that plastics emit powerful greenhouse gases as they degrade. Around half of this is single-use plastic: used just once before being discarded, with much of that ending up in our oceans. Over time, plastics give off more and more gas. Light (and to a lesser extent heat) are the primary catalysts for this gaseous release. This leads to an alarming feedback loop: as the climate changes, the planet gets hotter, the plastic gives off more methane, increasing the rate of climate change and the circle continues” (Parley, n.d.). Say no to disposable tableware and bring your own non-disposable tableware that you have used many times to offices. This behavior can reduce greenhouse gas emissions, thereby mitigating the problem of climate change. According to Isen (2013), individual behaviors are one of the most important key of formatting the social norms. The social attitude and advocacy are formed based on the individual human behaviors. If the young adults can change their behavior to use the take non-disposable tableware, it will be a part of the society gradually.'
        break
      case 'Bicycle':
        this.cover = require('../Puzzle/assets/Bicyle.png')
        this.msg = 'Young adults could try to use energy-saving methods when they go to offices or anywhere else, such as riding a bike instead of taking a taxi or by private car, using own feet for short distances, and so on. In all the different ways of transportation, “Bicycle riding uses minimal fossil fuels and is a pollution-free mode of transport” (Queensland Government, 2020). Ride a bicycle is the most green transportation way. Nowadays, transportation have almost 1/6 proportion of the Australia’s greenhouse gas emissions, “The transport sector accounts for 16 per cent of Australia’s greenhouse gas emissions. Light vehicles account for the largest share—10 per cent of Australia’s total emissions” (Australian Government: Climate Change Authority, n.d.). Green travel and cycling can reduce greenhouse gas emissions, thereby mitigating climate change. As the individual behaviors impact upon the besides people, changes in the individual behavior if the young adults will also influence other people to bring changes in themselves (Isen, 2003). That is why the changing in the young adult’s behavior is needed first. '
        break
      case 'Reusable bag':
        this.cover = require('../Puzzle/assets/Reusablebag.png')
        this.msg = 'Young adults could carry a reusable bag with you. When buying any kind of commodities, avoid using plastic bags and use reusable bags instead. Avoiding plastic bags at the time of buying any kind of product is very much important. Plastic bags are pollution to ocean “In the past, Australians use up to 10 million plastic bags every day – an astonishing 4 billion every year. Of these, approximately 150 million end up in our oceans and waterways, contributing to an estimated 8 million tonnes of plastic dumped into the ocean every year”(Sustainability Victoria, 2020). In addition, plastic bag also causes climate change. “Plastic not only poses an immense pollution problem—it also exacerbates climate change. The CIEL report warns that the greenhouse gas emissions from plastic jeopardize our ability to keep the global temperature rise below 1.5˚C. If plastic production stays on its current trajectory, by 2030, greenhouse gas emissions from plastic could reach 1.34 billion tons per year, equivalent to the emissions produced by 300 new 500MW coal-fired power plants. This is because more than 99 percent of plastics are made from fossil fuels, both natural gas and crude oil—and because plastic results in greenhouse gas emissions at every stage of its lifecycle” (Cho, 2020).sing reusable bags can reduce greenhouse gas emissions, thereby mitigating the problem of climate change. To bring changes in the mentality of the society, firstly the young adults should use the reusable bags in their day to day life. If they do so, other people of the society will get inspired that will make them use these bags. Because the human behaviors strongly affect that of others (Isen, 2003). And this will be very much beneficial for the society.'
        break
      case 'Turn offed light bulb':
        this.cover = require('../Puzzle/assets/bulb.png')
        this.msg = 'Young adults could turn off the light when they leave their workplaces. They can also promote turning off the light when they leave home to save electricity. Turning off the lights can also reduce greenhouse gas emission, “If you turn off the lights whenever you leave a room, you can reduce greenhouse gas emissions by 0.15 pounds per hour” (Boston University, n.d.).There is also a government publication saids that “According to the most recent Quarterly Update, issued in May this year, Australia produced 535.7 million tonnes of carbon dioxide equivalent (Mt CO2-e) emissions”(Hanna, 2015).Turning off the lights can saves electricity and reduces greenhouse gas emissions, thereby mitigating climate change. This is a type of waste of energy that should not be done by any person. Because energy is one of the most valuable assets of the world. Young adults have to play important role in this. They have to make sure that they save the energy. And their behavior will impact on the other people’s behavior. This is a nature of the human behavior that impact the people around him/ her (Isen, 2003).'
        break
      case 'Turn offed tap':
        this.cover = require('../Puzzle/assets/tap.png')
        this.msg = ' Young adults need to help tighten a not tightened tap in the workplaces. They can also make their family, friends, and belongings conscious to turn the tap tightly when they use it at home. Waste water can be recycled and hand-washing water can be saved to flush the toilet. It is important to reuse water, because “On-site wastewater reuse can reduce water use in both urban and rural households” (Fane & Reardon, 2013). Climate change affect the amount of rainfall. “Climate change is increasing the existing variability of rainfall and reducing the average rainfall in some areas. For example, there has been a long-term decline in rainfall in south-west Western Australia since the 1970s” (McCormick, n.d.). If we save water, we can reduce the impact from the drought caused by climate change in Australia. The theory of impacts on the people behavior is also applicable here which should be applied by the young adults. If they can develop the habit of saving water by tightening the tap, the people beside them will also do so. Because normally human behaviors affects the people around him/ her (Isen, 2003).'
        break
      default:
        break
      }
    }
  }
</script>

<style lang="less">
  #puzzleintroapp {
    min-height: 100vh;
    width: 100vw;
    background: url('./assets/bg.jpg') center center no-repeat;
    background-size: cover;
    padding: 10vh 10vw;
    overflow: hidden;
    position: relative;


    @media screen and (max-width: 1024px) {
      margin-top: -10vh;
      height: 120vh;
    }

    .intro {
      .title {
        font-size: 2rem;
        color: #fff;
        line-height: 2rem;
        font-weight: 900;
        margin-bottom: 2rem;

        @media screen and (max-width: 1024px) {
          font-size: 1rem;
          text-align: center;
        }
      }

      .st {
        color: rgb(4, 88, 38)
      }

      @media screen and (max-width: 1024px) {
        text-align: center;
      }
    }

    .content {
      width: 60vw;
      position: absolute;
      right: 5vw;
      bottom: 20vh;
      display: flex;
      padding: 2rem;
      border: 3px solid #fff;
      border-radius: 20px;
      height: 50vh;

      @media screen and (max-width: 1024px) {
        width: 100vw;
        height: 60vh;
        flex-direction: column;
        border: none;
        padding: 0;
        bottom: 0;
        top: 30vh;
        padding: 0;
        right: 0;
        left: 0;
        // margin-bottom: 10vh;
      }

      .img {
        flex: auto;
        max-width: 240px;
        width: 240px;
        height: 240px;
        margin-right: 4vw;
        box-sizing: border-box;
        background: url('./assets/red.png') 50% 50% no-repeat;
        background-size: contain;

        @media screen and (max-width: 1024px) {
          margin: 0 auto;
        }

        .thing-img {
          width: 240px;
          height: 240px;
          background-size: cover;
          background-position: 50% 50%;
          background-repeat: no-repeat;
        }
      }

      .msg {
        flex: 1;
        font-size: 13px;
        color: rgb(4, 88, 38);
        height: 100%;

        @media screen and (max-width: 1024px) {
          width: 90vw;
          margin: 0 auto;
        }
      }
    }
  }
</style>