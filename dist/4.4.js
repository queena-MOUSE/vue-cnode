webpackJsonp([4],{2:function(e,i,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function s(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return{components:d["default"],store:n["default"],vuex:{getters:{user:function(e){return e.user},state:function(i){return i[e]}},actions:(0,r["default"])(e)},props:{title:{type:String,"default":"全部"}},created:function(){this.state.path!=this.$route.path&&this.RESET(this.$route.path)},data:function(){return this.state},ready:function(){window.scrollTo(this.scrollX,this.scrollY)},beforeDestroy:function(){this.LEAVE()}}}Object.defineProperty(i,"__esModule",{value:!0}),i["default"]=void 0;var c=t(3),n=o(c),a=t(7),r=o(a),v=t(8),d=o(v);i["default"]=s},37:function(e,i,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(i,"__esModule",{value:!0});var s=t(10),c=o(s),n=t(4),a=o(n),r=t(2),v=o(r),d=t(3),b=o(d),l="topic";b["default"]._mutations[l+"SET_THING_STATE"]=function(e,i,t){var o=e[l].view.replies[i].ups,i=o.indexOf(t);i>-1?o.splice(i,1):o.push(t)},b["default"]._mutations[l+"RE_TA_EDIT"]=function(e,i){var t=e[l].view.replies[i];c["default"].set(t,"editState",!t.editState)},i["default"]={mixins:[(0,v["default"])(l)],route:{data:function(){this.getData()}},methods:{getData:function(){var e=this,i=arguments.length<=0||void 0===arguments[0]?function(){}:arguments[0],t=this.$route.params.id;a["default"].get("/api/v1/topic/"+t,{},function(i){var t=i.data;t?e.GET_DATA_VIEW(t):e.GET_DATA_ERROR({loadTip:"主题不存在"})},this.GET_DATA_ERROR,i)},testThing:function(e){return e.indexOf(this.user.id||"")>-1},toggleThing:function(e){if(!this.user.loginname)return this.$router.go("/signin");var i=this.view.replies.indexOf(e);this.$store.dispatch(l+"SET_THING_STATE",i,this.user.id),a["default"].post("/api/v1/reply/"+e.id+"/ups",{accesstoken:this.user.accesstoken})},reTa:function(e){return this.user.loginname?void this.$store.dispatch(l+"RE_TA_EDIT",e):this.$router.go("/signin")}},events:{reGo:function(e){this.getData(e)}}}},45:function(e,i,t){i=e.exports=t(1)(),i.push([e.id,".topic[_v-0e9cb70b]{background:#fff}.topic .tit[_v-0e9cb70b]{padding:20px 10px 10px;font-size:18px;color:#000}.topic .article[_v-0e9cb70b]{padding:10px}.user-view[_v-0e9cb70b]{position:relative;padding:10px;border-bottom:1px solid #eee}.user-view .tab[_v-0e9cb70b]{color:#2962ff}.user-view .typeicon[_v-0e9cb70b]{position:absolute;top:0;right:0;z-index:2;height:80px}.user-view .typeicon .icon[_v-0e9cb70b]{padding:20px 5px}.user-view .typeicon .iconfont[_v-0e9cb70b]{display:block;font-size:34px;-webkit-transform:rotate(35deg);transform:rotate(35deg)}.user-view .typeicon .icon-jinghua[_v-0e9cb70b]{color:#147b18}.user-view .typeicon .icon-zhiding[_v-0e9cb70b]{color:red}.user-view .user[_v-0e9cb70b]{padding:10px}.user-view .user .headimg[_v-0e9cb70b]{padding-right:10px}.user-view .user .headimg .pic[_v-0e9cb70b]{overflow:hidden;width:38px;height:38px;border-radius:50%;background:#d5d5d5}.user-view .user .name[_v-0e9cb70b]{font-size:16px;color:#000}.user-view .user .time[_v-0e9cb70b]{line-height:20px;font-size:12px;color:#888}.user-view .user .tab[_v-0e9cb70b]{padding-left:5px;line-height:20px;font-size:12px}.re-tit[_v-0e9cb70b]{padding:5px 10px;line-height:28px;border-top:1px solid #d5d5d5;border-bottom:2px solid #2962ff;background:#eee}.re-tit em[_v-0e9cb70b]{font-style:normal}.re-list li[_v-0e9cb70b]{padding:10px;border-bottom:1px solid #eee}.re-list .headimg[_v-0e9cb70b]{padding-right:10px}.re-list .headimg .pic[_v-0e9cb70b]{overflow:hidden;display:block;width:48px;height:48px;border-radius:50%;background:#eee}.re-list time[_v-0e9cb70b]{padding-left:10px;font-size:12px}.re-list .num[_v-0e9cb70b]{font-size:13px}.re-list .content[_v-0e9cb70b]{padding:10px 0;font-size:13px;font-family:inherit;color:inherit}.re-list .bottom .icon[_v-0e9cb70b]{position:relative;padding:5px 10px}.re-list .bottom .icon.count[_v-0e9cb70b]{color:#2962ff}.re-list .bottom .icon em[_v-0e9cb70b]{font-size:13px;font-style:normal}.re-topic[_v-0e9cb70b]{padding:20px 10px}",""])},67:function(e,i){e.exports=' <template v-if="loadState > 0"> <div class=topic _v-0e9cb70b=""> <div class=user-view _v-0e9cb70b=""> <div class=typeicon flex="" v-if="view.top || view.good" _v-0e9cb70b=""> <div class=icon v-if=view.top _v-0e9cb70b=""> <i class="iconfont icon-zhiding" _v-0e9cb70b=""></i> </div> <div class=icon v-if=view.good _v-0e9cb70b=""> <i class="iconfont icon-jinghua" _v-0e9cb70b=""></i> </div> </div> <div class=user flex=box:first _v-0e9cb70b=""> <div class=headimg _v-0e9cb70b=""> <div class=pic _v-0e9cb70b=""> <img :src=view.author.avatar_url alt="" _v-0e9cb70b=""> </div> </div> <div class=box _v-0e9cb70b=""> <div class=name _v-0e9cb70b="">{{view.author.loginname}}</div> <div flex="" _v-0e9cb70b=""> <time class=time _v-0e9cb70b="">发表于{{view.create_at | formatDate}}</time> <div class=tab v-if=view.tab _v-0e9cb70b="">#{{view.tab | tabName}}#</div> </div> </div> </div> </div> <div class=tit _v-0e9cb70b="">{{view.title}}</div> <article class="markdown-body article" _v-0e9cb70b="">{{{view.content}}}</article> <div class=re-tit v-if=view.replies.length _v-0e9cb70b="">共<em _v-0e9cb70b="">{{view.replies.length}}条回复</em></div> <ul class=re-list _v-0e9cb70b=""> <li flex=box:first v-for="item in view.replies" _v-0e9cb70b=""> <div class=headimg _v-0e9cb70b=""> <a class=pic v-link="\'/user/\' + item.author.loginname" _v-0e9cb70b=""> <img :src=item.author.avatar_url alt="" _v-0e9cb70b=""> </a> </div> <div class=bd _v-0e9cb70b=""> <div flex="" _v-0e9cb70b=""> <a flex-box=0 v-link="\'/user/\' + item.author.loginname" _v-0e9cb70b="">{{item.author.loginname}}</a> <time flex-box=1 _v-0e9cb70b="">{{item.create_at | formatDate}}</time> <div flex-box=0 class=num _v-0e9cb70b="">#{{$index + 1}}</div> </div> <div class="content markdown-body" _v-0e9cb70b="">{{{item.content}}}</div> <div class=bottom flex="dir:right cross:center" _v-0e9cb70b=""> <div class=icon v-on:click=reTa($index) _v-0e9cb70b=""> <i class="iconfont icon-huifu" _v-0e9cb70b=""></i> </div> <div class=icon :class="{count: testThing(item.ups)}" v-on:click=toggleThing(item) v-if="item.author.loginname !== user.loginname" _v-0e9cb70b=""> <i class="iconfont icon-dianzan" _v-0e9cb70b=""></i> <em v-if=item.ups.length _v-0e9cb70b="">{{item.ups.length}}</em> </div> </div> <topic-reply v-if=item.editState :topic_id=view.id :reply_id=item.id :accesstoken=user.accesstoken :placeholder="`@${item.author.loginname}`" :success=getData _v-0e9cb70b=""></topic-reply> </div> </li> </ul> <div class=re-topic v-if=user.accesstoken _v-0e9cb70b=""> <topic-reply :accesstoken=user.accesstoken :topic_id=view.id :success=getData _v-0e9cb70b=""> </topic-reply> </div> </div> </template> <load v-else="" :tip=loadTip :state=loadState _v-0e9cb70b=""></load> '},87:function(e,i,t){var o,s;t(90),o=t(37),s=t(67),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},90:function(e,i,t){var o=t(45);"string"==typeof o&&(o=[[e.id,o,""]]);t(5)(o,{});o.locals&&(e.exports=o.locals)}});