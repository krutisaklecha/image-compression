<template>
  <div class="container">
    <div class="row">
      <h2 class="title">Photo Listing View</h2>
      <div v-if="gotResponse" class="center-align">
        <div class="card-group">
          <paginate ref="paginator" name="responseData" :list="responseData" class="paginate-list">
            <div class="card border" style="max-width: 18rem;" v-for="item in paginated('responseData')" :key="item">
              <img :src="item.url" class="card-img-top" alt="">
              <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ item.id }}</p>
                <p class="card-text"><small class="text-muted">{{ item.url }}</small></p>
              </div>
              <div>
                <md-button @click="addItem(item)" v-show="compareTable.findIndex((i) => i.id === item.id) === -1">
                  Compare
                </md-button>
                <md-button @click="removeItem(item.id)" v-show="compareTable.findIndex((i) => i.id === item.id) !== -1">
                  Remove
                </md-button>
              </div>
            </div>
          </paginate>
          <div v-if="$refs.paginator" class="result">
            Viewing {{ $refs.paginator.pageItemsCount }} results
            <div class="pagination-div">
              <paginate-links for="responseData"
                              :show-step-links="true" :hide-single-page="true"
                              :limit="2"
                              :simple="{
                              next: 'Next »',
                              prev: '« Back'}"
              ></paginate-links>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br> <br>
    <div class="row" v-if="compareTable.length!==0">
      <table-list :items="compareTable"></table-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import tableList from './Table';

export default {
  name: "imageList",
  components: {tableList},
  data() {
    return {
      responseData: [],
      paginate: ['responseData'],
      gotResponse: false,
      compareTable: []
    }
  },
  created() {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    axios.get(url)
        .then(response => {
          this.gotResponse = true;
          this.responseData = response.data;
        })
        .catch(error => {
          console.log(error);
        });
  },
  methods: {
    addItem(item) {
      const userInput = {
        id: item.id,
        url: item.url,
        title: item.title,
        thumbnailUrl: item.thumbnailUrl,
      };
      this.compareTable.push(userInput);
    },
    removeItem(item) {
      const list = [...this.compareTable];
      this.compareTable = list.filter((i) => i.id !== item);
    }
  }
}

</script>

<style scoped>
.title {
  text-align: center;
  color: grey;
}
.card {
  width: 18rem;
  margin: 8px;
  display: inline-block;
  vertical-align: top;
}
.border {
  border-color: #343a40 !important;
}
.center-align {
  margin: auto;
  width: 73%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.pagination-div {
  text-align: right;
  text-indent: 25px;
}
.paginate-links {
  cursor: pointer;
  float: right;
  clear: both;
  display: inline-flex;
}
.result{
  float: right;
}
ul.paginate-links > li.number > a{
  margin-right: 10px;
}
</style>
