<<template>
    <div id="app">
      <app-header></app-header>
        <section class="main-section section">
            <div class="container content">
               <!-- <category></category> -->
               <router-view></router-view>
            </div>
        </section>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import Category from "./Category.vue";

export default {
  components: {
    "app-header": AppHeader,
    "app-footer": AppFooter
  }
};
</script>

<<style lang="scss">
$primary: #287ab1;
 @import '~bulma';

 .columns{
     flex-wrap:wraps
 }
</style>
