<script lang="tsx">
import { CreateElement } from 'vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  functional: true,
  name: 'MenuItem',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
})
export default class Item extends Vue {
  render (h: CreateElement, context: { props: { icon: string, title: string }}) {
    const { icon, title } = context.props;
    const vnodes = []

    if (icon) {
      // if (icon.includes('el-icon')) {
      //   vnodes.push(<i class={ [icon, 'sub-el-icon']} />)
      // } else {
      //   vnodes.push(<svg-icon icon-class={ icon } />)
      // }
      vnodes.push(<i class={['iconfont', icon]}/>)
    }

    if (title) {
      vnodes.push(<span slot='title' > {title} </span>)
     }
    return vnodes
  }
}
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
