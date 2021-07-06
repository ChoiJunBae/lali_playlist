<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"/>
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-center, font-weight-black">Lali PlayList</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog
          v-model="dialog"
          persistent
          max-width="600px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              v-bind="attrs"
              v-on="on"
          >
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-text-field
                      label="Legal first name*"
                      required
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-text-field
                      label="Legal middle name"
                      hint="example of helper text only on focus"
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-text-field
                      label="Legal last name*"
                      hint="example of persistent helper text"
                      persistent-hint
                      required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      label="Email*"
                      required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      label="Password*"
                      type="password"
                      required
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-select
                      :items="['0-17', '18-29', '30-54', '54+']"
                      label="Age*"
                      required
                  ></v-select>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-autocomplete
                      :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                      label="Interests"
                      multiple
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
            >
              Close
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        app
        white
        :src="require('@/assets/cold-bg.jpg')"
    >
      <template v-slot:img="props">
        <v-img :gradient="gradient" v-bind="props"/>
      </template>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h mt-5 mb-2 font-weight-black"> 최준배</v-list-item-title>
          <v-list-item-subtitle> cjb9610@naver.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data: () => ({
    drawer: false,
    gradient: 'rgba(255,255,255), rgba(0,0,0, .7)',
    items: [
      {title: 'Weather', icon: 'mdi-weather-hazy', to: '/'},
      {title: 'Lali의 추천', icon: 'mdi-star', to: '/recommend'},
      {title: '리스트 추가', icon: 'mdi-playlist-plus', to: '/create'},
      {title: '리스트 확인', icon: 'mdi-playlist-check', to: '/check'}
    ],
    right: null,
  }),
};
</script>

<style>
#title {
  margin: 10px;
}
</style>
