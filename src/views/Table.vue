<template>
  <div>
    <div class="block">
      <p>通常</p>
      <v-data-table
        v-model="tableManager.selectedItems"
        fixed-header
        height="400px"
        :headers="tableManager.headers"
        :items="tableManager.items"
        :items-per-page="10"
        :item-key="tableManager.itemKey"
        show-select
        @click:row="tableManager.selectItem"
      >
      </v-data-table>
    </div>
    <div class="block custom">
      <p>カスタマイズ</p>
      <v-data-table
        v-model="tableManager.selectedItems"
        fixed-header
        height="400px"
        :headers="tableManager.headers"
        :items="tableManager.items"
        :items-per-page="10"
        :item-key="tableManager.itemKey"
        show-select
        @click:row="tableManager.selectItem"
      >
      </v-data-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { times } from "lodash-es";
import faker from "faker";
import { format as formatDate } from "date-fns";
import { TableManager, TableManagerHeader } from "../utils/tableManager";

interface ITableItem {
  id: number;
  name: string;
  email: string;
  tel: string;
  birthday: string;
  zipCode: string;
  address: string;
  latitude: string;
  longitude: string;
  avatarUrl: string;
}

const headers: TableManagerHeader<ITableItem>[] = [
  { text: "id", value: "id" },
  { text: "name", value: "name" },
  { text: "tel", value: "tel" },
  { text: "email", value: "email" },
  { text: "birthday", value: "birthday" },
  { text: "zipCode", value: "zipCode" },
  { text: "address", value: "address" },
  { text: "latitude", value: "latitude" },
  { text: "longitude", value: "longitude" },
  { text: "avatarUrl", value: "avatarUrl" },
];

function createDummyData() {
  const now = new Date();
  return times(100).map((i) => ({
    id: i,
    name: faker.name.lastName() + " " + faker.name.firstName(),
    email: faker.internet.email(),
    tel: faker.phone.phoneNumberFormat(),
    birthday: formatDate(faker.date.past(50, now), "yyyy-MM-dd"),
    zipCode: faker.address.zipCode(),
    address: faker.address.streetAddress(),
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
    avatarUrl: faker.image.avatar(),
  }));
}

export default Vue.extend({
  name: "App",
  data() {
    const tableManager = new TableManager<ITableItem>("id", headers);
    const data = createDummyData();
    tableManager.setItems(data);
    return {
      tableManager,
    };
  },
});
</script>

<style lang="scss" scoped>
.block {
  padding: 10px;
}

.custom {
  background: red;

  & >>> .v-data-table {
    font-size: 10px;
  }
}
.custom ::v-deep {
  .v-data-table-header {
    background-color: red;
  }
  th {
    background: red;
  }
}
</style>