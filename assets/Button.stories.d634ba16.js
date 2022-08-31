import{d as i,a as p,n as l,o as d}from"./vue.esm-bundler.6acb5530.js";const u=["primary","secondary"],a=i({name:"Button",components:{},props:{variant:{type:String,default:"primary",validator:t=>u.indexOf(t)!==-1}},data(){return{}}});const m=(t,o)=>{const n=t.__vccOpts||t;for(const[e,r]of o)n[e]=r;return n};function y(t,o,n,e,r,B){return d(),p("button",{class:l(["ds-button",{primary:t.variant=="primary",secondary:t.variant=="secondary"}])},"Button from vue component",2)}const s=m(a,[["render",y]]);a.__docgenInfo={displayName:"Button",exportName:"default",description:"",tags:{},props:[{name:"variant",type:{name:"Variants"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary"]}]};const f={parameters:{storySource:{source:`import Button from "./Button.vue";
// import "../../../src/globals/scss/styles.scss";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => ({
  components: { Button },
  setup() {
    //\u{1F447} The args will now be passed down to the template
    return { args };
  },
  template: '<Button v-bind="args"/>',
});

export const FirstStory = Template.bind({
  variant: "primary",
});

export const SecondStory = Template.bind({});

SecondStory.args = { variant: "secondary" };
`,locationsMap:{"first-story":{startLoc:{col:26,line:18},endLoc:{col:2,line:20},startBody:{col:26,line:18},endBody:{col:2,line:20}},"second-story":{startLoc:{col:17,line:9},endLoc:{col:2,line:16},startBody:{col:17,line:9},endBody:{col:2,line:16}}}}},title:"Button",component:s},c=t=>({components:{Button:s},setup(){return{args:t}},template:'<Button v-bind="args"/>'}),g=c.bind({variant:"primary"}),v=c.bind({});v.args={variant:"secondary"};const S=["FirstStory","SecondStory"];export{g as FirstStory,v as SecondStory,S as __namedExportsOrder,f as default};
//# sourceMappingURL=Button.stories.d634ba16.js.map
