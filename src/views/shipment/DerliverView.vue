<template>
     <v-container fluid>
        <v-toolbar height="40px" background-color="primary" dark>
            <v-toolbar-title>Oracle GRPList</v-toolbar-title>            
        </v-toolbar>
     
        <v-data-table :headers="headers" :items="items" >
        </v-data-table>
     </v-container>
</template>

<script>
export default {
    name: "Derliverview",
    mounted() {
        this.headData();
    },
    data() {
        return {
            headers: [
                {text: 'CODE',  value: 'C_GCODE', sortable: false, align:'center', width: "100px"},
                {text: 'NAME',  value: 'N_GCODE', sortable: false, align:'left', width: "400px"},
            ],
            items: [],
        }
    },
    methods: {
        async headData() {
            console.log("headData");
            this.items = await this.$axios.get("/api/oracledbtest/getGrplist");     
            console.log("items", this.items);
        }
    },
}
</script>

<style>

</style>