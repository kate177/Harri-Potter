<template>
  <section class="slider">
    <div class="slider-wrapper">
      <div class="slider-showing">
        <button class="slider-showing__left" @click="prevSlide">
          <img src="../assets/img/left.png" alt="" />
        </button>

        <div class="slider-showing__box active">
          <div class="slider-showing__image">
            <img
              :src="require('../assets/img/' + this.ideix + '.jpg')"
              alt=""
            />
          </div>
          <router-link :to="'/' + this.ideix">
            <div class="slider-showing__link">
              <h1 class="slider-showing__title">Перейти</h1>
            </div>
          </router-link>
        </div>

        <button class="slider-showing__right" @click="nextSlide">
          <img src="../assets/img/right.png" alt="" />
        </button>
      </div>
      <div class="slider-switch">
        <span @click="oneSlide" v-bind:class="{ active: oneMode }"></span>
        <span @click="twoSlide" v-bind:class="{ active: twoMode }"></span>
        <span @click="threeSlide" v-bind:class="{ active: threMode }"></span>
        <span @click="forSlide" v-bind:class="{ active: forMode }"></span>
        <span @click="fiveSlide" v-bind:class="{ active: fiveMode }"></span>
        <span @click="sexSlide" v-bind:class="{ active: sixMode }"></span>
        <span @click="sevenSlide" v-bind:class="{ active: sevenMode }"></span>
        <span @click="eightSlide" v-bind:class="{ active: eightMode }"></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ideix: 1,
      oneMode: true,
      twoMode: false,
      threMode: false,
      forMode: false,
      fiveMode: false,
      sixMode: false,
      sevenMode: false,
      eightMode: false,
    };
  },
  methods: {
    nextSlide() {
      this.ideix == 8 ? (this.ideix = 1) : this.ideix++;
      if (this.ideix == 1) {
        this.oneMode = true;
        this.twoMode = false;
        this.threMode = false;
        this.forMode = false;
        this.fiveMode = false;
        this.sixMode = false;
        this.sevenMode = false;
        this.eightMode = false;
      } else if (this.ideix == 2) {
        this.oneMode = false;
        this.twoMode = true;
        this.threMode = false;
        this.forMode = false;
        this.fiveMode = false;
        this.sixMode = false;
        this.sevenMode = false;
        this.eightMode = false;
      } else if (this.ideix == 3) {
        this.oneMode = false;
        this.twoMode = false;
        this.threMode = true;
        this.forMode = false;
        this.fiveMode = false;
        this.sixMode = false;
        this.sevenMode = false;
        this.eightMode = false;
      } else if (this.ideix == 4) {
        this.oneMode = false;
        this.twoMode = false;
        this.threMode = false;
        this.forMode = true;
        this.fiveMode = false;
        this.sixMode = false;
        this.sevenMode = false;
        this.eightMode = false;
      } else if (this.ideix == 5) {
        this.oneMode = false;
        this.twoMode = false;
        this.threMode = false;
        this.forMode = false;
        this.fiveMode = true;
        this.sixMode = false;
        this.sevenMode = false;
        this.eightMode = false;
      } else if (this.ideix == 6) {
        this.oneMode = false;
        this.twoMode = false;
        this.threMode = false;
        this.forMode = false;
        this.fiveMode = false;
        this.sixMode = true;
        this.sevenMode = false;
        this.eightMode = false;
      } else if (this.ideix == 7) {
        this.oneMode = false;
        this.twoMode = false;
        this.threMode = false;
        this.forMode = false;
        this.fiveMode = false;
        this.sixMode = false;
        this.sevenMode = true;
        this.eightMode = false;
      } else if (this.ideix == 8) {
        this.oneMode = false;
        this.twoMode = false;
        this.threMode = false;
        this.forMode = false;
        this.fiveMode = false;
        this.sixMode = false;
        this.sevenMode = false;
        this.eightMode = true;
      }
    },
    prevSlide() {
      this.ideix == 1 ? (this.ideix = 8) : this.ideix--;
      if (this.ideix == 1) {
        this.oneMode = true;
        this.twoMode = false;
        this.threMode = false;
        this.forMode = false;
        this.fiveMode = false;
        this.sixMode = false;
        this.sevenMode = false;
        this.eightMode = false;
      } else if (this.ideix == 2) {
        this.oneMode = false;
        this.twoMode = true;
        this.threMode = false;
        this.forMode = false;
        this.fiveMode = false;
        this.sixMode = false;
        this.sevenMode = false;
        this.eightMode = false;
      } else if (this.ideix == 3) {
        this.oneMode = false;
        this.twoMode = false;
        this.threMode = true;
        this.forMode = false;
        this.fiveMode = false;
        this.sixMode = false;
        this.sevenMode = false;
        this.eightMode = false;
      } else if (this.ideix == 4) {
        this.oneMode = false;
        this.twoMode = false;
        this.threMode = false;
        this.forMode = true;
        this.fiveMode = false;
        this.sixMode = false;
        this.sevenMode = false;
        this.eightMode = false;
      } else if (this.ideix == 5) {
        this.oneMode = false;
        this.twoMode = false;
        this.threMode = false;
        this.forMode = false;
        this.fiveMode = true;
        this.sixMode = false;
        this.sevenMode = false;
        this.eightMode = false;
      } else if (this.ideix == 6) {
        this.oneMode = false;
        this.twoMode = false;
        this.threMode = false;
        this.forMode = false;
        this.fiveMode = false;
        this.sixMode = true;
        this.sevenMode = false;
        this.eightMode = false;
      } else if (this.ideix == 7) {
        this.oneMode = false;
        this.twoMode = false;
        this.threMode = false;
        this.forMode = false;
        this.fiveMode = false;
        this.sixMode = false;
        this.sevenMode = true;
        this.eightMode = false;
      } else if (this.ideix == 8) {
        this.oneMode = false;
        this.twoMode = false;
        this.threMode = false;
        this.forMode = false;
        this.fiveMode = false;
        this.sixMode = false;
        this.sevenMode = false;
        this.eightMode = true;
      }
    },
    oneSlide() {
      this.ideix = 1;
      this.oneMode = true;
      this.twoMode = false;
      this.threMode = false;
      this.forMode = false;
      this.fiveMode = false;
      this.sixMode = false;
      this.sevenMode = false;
      this.eightMode = false;
    },
    twoSlide() {
      this.ideix = 2;
      this.oneMode = false;
      this.twoMode = true;
      this.threMode = false;
      this.forMode = false;
      this.fiveMode = false;
      this.sixMode = false;
      this.sevenMode = false;
      this.eightMode = false;
    },
    threeSlide() {
      this.ideix = 3;
      this.oneMode = false;
      this.twoMode = false;
      this.threMode = true;
      this.forMode = false;
      this.fiveMode = false;
      this.sixMode = false;
      this.sevenMode = false;
      this.eightMode = false;
    },
    forSlide() {
      this.ideix = 4;
      this.oneMode = false;
      this.twoMode = false;
      this.threMode = false;
      this.forMode = true;
      this.fiveMode = false;
      this.sixMode = false;
      this.sevenMode = false;
      this.eightMode = false;
    },
    fiveSlide() {
      this.ideix = 5;
      this.oneMode = false;
      this.twoMode = false;
      this.threMode = false;
      this.forMode = false;
      this.fiveMode = true;
      this.sixMode = false;
      this.sevenMode = false;
      this.eightMode = false;
    },
    sexSlide() {
      this.ideix = 6;
      this.oneMode = false;
      this.twoMode = false;
      this.threMode = false;
      this.forMode = false;
      this.fiveMode = false;
      this.sixMode = true;
      this.sevenMode = false;
      this.eightMode = false;
    },
    sevenSlide() {
      this.ideix = 7;
      this.oneMode = false;
      this.twoMode = false;
      this.threMode = false;
      this.forMode = false;
      this.fiveMode = false;
      this.sixMode = false;
      this.sevenMode = true;
      this.eightMode = false;
    },
    eightSlide() {
      this.ideix = 8;
      this.oneMode = false;
      this.twoMode = false;
      this.threMode = false;
      this.forMode = false;
      this.fiveMode = false;
      this.sixMode = false;
      this.sevenMode = false;
      this.eightMode = true;
    },
  },
};
</script>

<style lang="scss">
.slider {
  width: 100%;
  height: 100vh;
  background-color: #0a0e11;
  padding: 38px 0px 37px;
  &-wrapper {
    width: 1340px;
    margin: 0 auto;
  }
  &-showing {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    &__left {
      width: 100px;
      height: 100px;
      background: #162027;
      border-radius: 10px;
      padding: 25px;
      & img {
        width: 50px;
        height: 50px;
      }
    }
    &__box {
      position: relative;
      width: 1120px;
      height: 630px;
      margin: 0px 10px;
      border-radius: 20px;
      cursor: pointer;
      overflow: hidden;
      display: none;
      &:hover .slider-showing__link {
        left: 0px;
      }
      &.active {
        display: block;
      }
    }
    &__image {
      width: 100%;
      height: 100%;
      border-radius: 20px;
      & img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
      }
    }
    &__link {
      position: absolute;
      top: 0px;
      width: 100%;
      height: 100%;
      left: -100%;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: rgba(10, 14, 17, 0.81);
      backdrop-filter: blur(4px);
      border-radius: 20px;
      transition: left 0.5s;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__title {
      font-weight: 500;
      font-size: 64px;
      line-height: 75px;
      letter-spacing: 0.1em;
      color: #ffffff;
      text-transform: uppercase;
    }
    &__right {
      width: 100px;
      height: 100px;
      background: #162027;
      border-radius: 10px;
      padding: 25px;
      & img {
        width: 50px;
        height: 50px;
      }
    }
  }
  &-switch {
    width: 200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    & span {
      width: 20px;
      height: 20px;
      background-color: #929ca0;
      border-radius: 50px;
      cursor: pointer;
      &.active {
        background-color: #3e4e58;
      }
    }
  }
}
@media screen and (max-width: 1390px) {
  .slider-wrapper {
    width: 1200px;
  }
  .slider-showing__box {
    width: 1002px;
  }
  .slider-showing__left {
    width: 90px;
    height: 90px;
    padding: 20px;
  }
  .slider-showing__right {
    width: 90px;
    height: 90px;
    padding: 20px;
  }
}
@media screen and (max-width: 1200px) {
  .slider-wrapper {
    width: 993px;
  }
  .slider-showing__box {
    width: 829px;
  }
  .slider-showing__left {
    width: 70px;
    padding: 20px 15px;
    & img {
      width: 40px;
    }
  }
  .slider-showing__right {
    width: 70px;
    padding: 20px 15px;
    & img {
      width: 40px;
    }
  }
}
@media screen and (max-width: 992px) {
  .slider-wrapper {
    width: 769px;
  }
  .slider-showing__box {
    width: 641px;
    height: 600px;
  }
  .slider-showing__left {
    width: 54px;
    height: 86px;
    padding: 19px 13px 19px 12px;
    & img {
      width: 29px;
      height: 48px;
    }
  }
  .slider-showing__right {
    width: 54px;
    height: 86px;
    padding: 19px 13px 19px 12px;
    & img {
      width: 29px;
      height: 48px;
    }
  }
}
@media screen and (max-width: 768px) {
  .slider-wrapper {
    width: 579px;
    margin-top: 10%;
  }
  .slider-showing__box {
    width: 483px;
    height: 400px;
  }
}
@media screen and (max-width: 576px) {
  .slider {
    padding: 38px 10px;
    display: flex;
    align-items: center;
  }
  .slider-wrapper {
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    margin: 0px;
  }
  .slider-showing {
    order: 2;
    flex-direction: column;
    width: 100%;
    margin-bottom: 0px;
    &__box {
      width: 100%;
      height: 300px;
      position: relative;
      z-index: 1;
      margin: 10px 0px;
    }
  }
  .slider-showing__left {
    z-index: 2;
    left: 0px;
    width: 80px;
    height: 50px;
    padding: 0px;
    & img {
      transform: rotate(90deg);
    }
  }
  .slider-showing__right {
    z-index: 2;
    right: 0px;
    width: 80px;
    height: 50px;
    padding: 0px;
    & img {
      transform: rotate(90deg);
    }
  }
  .slider-showing__title {
    font-size: 52px;
  }
  .slider-switch {
    flex-direction: column;
    order: 1;
    height: 200px;
    width: auto;
    margin-right: 10px;
  }
}
@media screen and (max-width: 414px) {
  .slider-showing {
    &__box {
      height: 200px;
    }
  }
  .slider-showing__title {
    font-size: 38px;
  }
  .slider-switch span {
    width: 15px;
    height: 15px;
  }
}
</style>
