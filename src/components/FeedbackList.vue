<template>
  <div class="feedback-list">
    <div class="page-title">
      <!-- <span class="text">Feedback List</span> -->
    </div>
    <div class="table" v-if="result && result.length > 0">
      <div class="titles">
        <span class="title">Client ID</span>
        <span class="title">Message</span>
      </div>
      <div class="datas" v-for="(item, index) in result" :key="index">
        <span class="id"> {{ item.id }}</span>
        <span class="message"> {{ item.text }}</span>
      </div>
    </div>
    <div class="no-result" v-else>
      <span>There is no feedback.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "FFilter",
  data() {
    return {
      clientId: null,
      result: null,
    };
  },
  methods: {
    search(id) {
      this.axios
        .get(`http://localhost:3000/feedbacks/${id}`)
        .then((response) => {
          this.result = response.data;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.feedback-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  .page-title {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 32px;

    .text {
      font-size: 36px;
      font-weight: 500;
    }
  }

  .table {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 32px;
    .titles {
      display: flex;
      justify-content: space-evenly;
      border-bottom: 1px solid #000000;
      span {
        font-size: 24px;
        font-weight: 500;
        margin-right: 24px;
      }
    }
    .datas {
      display: flex;
      justify-content: space-evenly;
      border-bottom: 1px solid #000000;
      span {
        padding: 10px 0;
      }
    }
  }
  .no-result {
    display: flex;
    justify-content: center;
    margin-top: 32px;
    span {
      font-size: 36px;
      font-weight: 500;
      text-align: center;
    }
  }
}
</style>
