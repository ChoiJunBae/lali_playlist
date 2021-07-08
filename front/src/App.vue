<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="ma-2" style="color:#8E24AA"/>
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-h5 text-center font-weight-black">
        <router-link id="title" :to="{name:'Weather'}">Lali PlayList</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!--상단 로그인 버튼-->
      <v-dialog
          v-model="dialog"
          persistent
          max-width="450px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn-icon
              v-bind="attrs"
              v-on="on"
          >
            <v-icon style="color:#8E24AA" class="ma-2">mdi-account</v-icon>
          </v-btn-icon>
        </template>

<!--        로그인 내부-->
        <v-card>
          <v-card-title class="ma-2">
            <v-spacer></v-spacer>
            <span id="lali" class="text-h4 font-weight-black">Lali</span>
            <span class="text-h4 ">.Login</span>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <!--                <v-col-->
                <!--                    cols="12"-->
                <!--                    sm="6"-->
                <!--                    md="4"-->
                <!--                >-->
                <!--                  <v-text-field-->
                <!--                      label="Legal first name*"-->
                <!--                      required-->
                <!--                  ></v-text-field>-->
                <!--                </v-col>-->
                <!--                <v-col-->
                <!--                    cols="12"-->
                <!--                    sm="6"-->
                <!--                    md="4"-->
                <!--                >-->
                <!--                  <v-text-field-->
                <!--                      label="Legal middle name"-->
                <!--                      hint="example of helper text only on focus"-->
                <!--                  ></v-text-field>-->
                <!--                </v-col>-->
                <!--                <v-col-->
                <!--                    cols="12"-->
                <!--                    sm="6"-->
                <!--                    md="4"-->
                <!--                >-->
                <!--                  <v-text-field-->
                <!--                      label="Legal last name*"-->
                <!--                      hint="example of persistent helper text"-->
                <!--                      persistent-hint-->
                <!--                      required-->
                <!--                  ></v-text-field>-->
                <!--                </v-col>-->
                <v-col cols="12">
                  <v-text-field
                      label="Email"
                      hint="write only your google email"
                      persistent-hint
                      required
                      color="#8E24AA"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      label="Password"
                      type="password"
                      required
                      color="#8E24AA"
                  ></v-text-field>
                </v-col>
                <!--                <v-col-->
                <!--                    cols="12"-->
                <!--                    sm="6"-->
                <!--                >-->
                <!--                  <v-select-->
                <!--                      :items="['0-17', '18-29', '30-54', '54+']"-->
                <!--                      label="Age*"-->
                <!--                      required-->
                <!--                  ></v-select>-->
                <!--                </v-col>-->
                <!--                <v-col-->
                <!--                    cols="12"-->
                <!--                    sm="6"-->
                <!--                >-->
                <!--                  <v-autocomplete-->
                <!--                      :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"-->
                <!--                      label="Interests"-->
                <!--                      multiple-->
                <!--                  ></v-autocomplete>-->
                <!--                </v-col>-->
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="#8E24AA"
                text
                @click="dialog = false"
            >
              Close
            </v-btn>
            <v-btn
                color="#8E24AA"
                text
                @click="dialog = false"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>

<!--    좌측 네비게이션-->
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
          <v-list-item-subtitle>cjb9610@naver.com</v-list-item-subtitle>
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
    gradient: 'rgba(255,255,255, .7), rgba(0,0,0, .7)',
    items: [
      {title: 'Weather', icon: 'mdi-weather-hazy', to: '/'},
      {title: 'WeaterTest', icon: 'mdi-weather-hazy', to:'/weathertest'},
      {title: 'Lali recommend', icon: 'mdi-star', to: '/recommend'},
      {title: 'Add PlayList', icon: 'mdi-playlist-plus', to: '/create'},
      {title: 'Check PlayList', icon: 'mdi-playlist-check', to: '/check'},
      {title: 'Chart', icon: 'mdi-playlist-check', to: '/chart'},

    ],
    right: null,
  }),
};
</script>

<style>

  #lali{
    color:#8E24AA;
  }
  #title{
    text-decoration: none;
    color:#8E24AA;
  }
</style>
