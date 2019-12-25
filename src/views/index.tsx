import { Component, Vue } from "vue-property-decorator"
import  Header from '@/components/Header.vue'
import  Footer from '@/components/Footer.vue'
import '@/views/index.scss'
@Component({
    components:{
        Header,Footer
    }
})
export default class Index extends Vue{
    private render() {  // jsx语法
        return (
            <section id="index">
                <Header/>
                <div class="content">
                    <router-view/>
                    <Footer/>
                </div>
            </section>
        )
    }
}
