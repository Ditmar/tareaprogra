import axios from "axios";
axios({
  method: "get",
  url: "https://cars-8feb0.firebaseio.com/.json",
  data: {},
}).then(function (response) {
  console.log("{");
  response.data.map((item) => {
    console.log(`"${item.title}",`);
  });
  console.log("}");
});
