<template>
  <div class="container">
    <div class="main">
      <div class="menu">
        <div class="logo">
          <i class="el-icon-delete"></i>
        </div>
        <div class="nav">
          <div>Dasborad</div>
          <div>Service</div>
          <div>History</div>
          <div>Action</div>
          <div class="search">
            <input type="text" />
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="title">Cards</div>
        <div class="cards-contain">
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </div>
      </div>
      <div class="marketing">
        <div class="main-service">
          <div class="title-space">
            <span>Main Service</span>
            <span class="opacity-05">View all</span>
          </div>
          <el-card v-for="i in 6" :key="i" class="card">
            <i class="el-icon-ice-cream-round"></i>
            <span>iceC</span>
          </el-card>
        </div>
        <div class="flex-box">
          <div class="current">
            <div class="title-space">
              <span>Current</span>
              <span class="opacity-05">View all</span>
            </div>
            <div class="line" v-for="i in 3" :key="i">
              <span>18892744892</span>
              <div class="dosh"></div>
              <span>$2,234.01</span>
            </div>
          </div>
          <div class="saving">
            <div class="title-space">
              <span>Savings</span>
              <span class="opacity-05">View all</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-card class="aside" :body-style="{height:'100%'}">
      <div class="header">
        <div>
          <i class="el-icon-bell"></i>
        </div>
        <div>
          <span>Anastasia</span>
          <el-avatar shape="square" :size="20" :src="squareUrl"></el-avatar>
        </div>
      </div>
      <div class="cricle">
        <el-progress type="circle" :percentage="25"></el-progress>
      </div>
      <div class="list">
        <span class="size">Transaction</span>
        <el-dropdown class="flex-box">
          <span class="size">
            Today
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>111</el-dropdown-item>
            <el-dropdown-item>222</el-dropdown-item>
            <el-dropdown-item>333</el-dropdown-item>
            <el-dropdown-item disabled>444</el-dropdown-item>
            <el-dropdown-item divided>555</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="list-container">
        <div class="list-item" v-for="i in 3" :key="i">
          <i class="el-icon-check"></i>
          <span>Dribble Pro Plan</span>
          <span style="color:red">-$100</span>
        </div>
      </div>
      <el-button size="mini">
        Translate Money
        <i class="el-icon-right"></i>
      </el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}
.main {
  width: 75%;
  padding: 20px;
  background-origin: border-box;
  .menu {
    display: flex;
    margin-bottom: 20px;
    .logo {
      flex: 1;
    }
    .nav {
      width: 75%;
      display: flex;
      justify-content: space-between;
    }
    .search {
      width: 80px;
      input {
        width: 100%;
      }
    }
  }
  .cards {
    .title {
      margin-bottom: 20px;
    }
    .cards-contain {
      display: flex;
      justify-content: space-between;
    }
    .box-card {
      width: 160px;
    }
  }
  .marketing {
    display: flex;
    margin-top: 15px;
    height: 270px;
    .main-service {
      width: 180px;
      margin-right: 20px;
      height: 100%;
      display: flex;
      flex-wrap: wrap;

      .card {
        width: 80px;
        height: 80px;
        border-radius: 20px;
        margin-bottom: 5px;
      }
      .card:nth-child(2n) {
        margin-right: 15px;
      }
    }
    .flex-box {
      flex: 1;
    }
    .current {
      height: 110px;
      .line {
        display: flex;
        flex-wrap: nowrap;
        .dosh {
          flex: 1;
          border-bottom: 1px dashed;
        }
      }
    }
    .saving {
      background: #aa4;
      height: 160px;
    }
    .title-space {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .opacity-05 {
      opacity: 0.5;
    }
  }
}

.aside {
  width: 25%;
  box-sizing: border-box;
  .header {
    height: 30px;
    display: flex;
    justify-content: space-between;
    & > div {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
  .cricle {
    text-align: center;
    margin: 40px 0 20px;
  }
  .list {
    display: flex;
    justify-content: space-between;
  }
  .size {
    font-size: 10px;
  }
  .flex-box {
    display: flex;
    align-items: center;
  }
  .list-container {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .list-item {
    display: flex;
    font-size: 10px;
    height: 20px;
    justify-content: space-between;
  }
}
@media screen and (max-width: 375px) {
  .aside{
    display: none;
    background: #aa4;
  }
  .main{
    width:100%;
  }
}
</style>