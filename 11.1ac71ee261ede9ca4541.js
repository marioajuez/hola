(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{vwuq:function(n,e,i){"use strict";i.r(e),i.d(e,"ExplorePageModule",function(){return y});var t=i("ofXK"),s=i("3Pt+"),o=i("TEn/"),c=i("tyNb"),r=i("2Vo4"),a=i("fXoL"),p=i("Iwhz"),b=i("2MiI"),h=i("kVNm");function l(n,e){1&n&&(a.Ob(0,"div",6),a.Kb(1,"ion-spinner",7),a.Nb())}function d(n,e){1&n&&(a.Ob(0,"div",6),a.Kb(1,"ion-icon",8),a.Ob(2,"ion-text",9),a.kc(3,"En el momento, no se encontraron noticias en esta categoria"),a.Nb(),a.Nb())}function f(n,e){if(1&n){const n=a.Pb();a.Mb(0),a.Kb(1,"app-noticias",10),a.Ob(2,"ion-infinite-scroll",11),a.Wb("ionInfinite",function(e){return a.gc(n),a.Yb().loadData(e)}),a.Kb(3,"ion-infinite-scroll-content",12),a.Nb(),a.Lb()}if(2&n){const n=a.Yb();a.zb(1),a.dc("noticias",n.noticias)}}const g=[{path:"",component:(()=>{class n{constructor(n){this.noticiasService=n,this.errorMensaje={429:"Se ha excedido el numero de solicitudes por hoy"},this.noticias=[],this.page=1,this.spinnerAsync=new r.a(!0)}ngOnInit(){this.cargarNoticias()}cargarNoticias(n,e){this.noticiasService.getTopHeadlines(this.page,this.spinnerAsync).subscribe(e=>{try{(this.page+1>180||0==e.news.length&&0!=this.noticias.length)&&(n.target.disabled=!0),this.noticias.push(...e.news),n&&n.target.complete()}catch(i){console.error(i)}},n=>{console.log(this.errorMensaje[n.status])})}loadData(n,e){this.page++,this.cargarNoticias(n)}refreshNews(n){this.spinnerAsync.next(!0),this.page=1,this.noticiasService.getTopHeadlines(this.page,this.spinnerAsync).subscribe(e=>{this.noticias=[],this.noticias.push(...e.news),n.target.complete()})}}return n.\u0275fac=function(e){return new(e||n)(a.Jb(p.a))},n.\u0275cmp=a.Db({type:n,selectors:[["app-explore"]],decls:10,vars:9,consts:[["title","Colombia News"],["color","dark",1,"ion-no-padding"],["slot","fixed",3,"ionRefresh"],["color","dark","refreshingSpinner","crescent"],["class","content-center",4,"ngIf"],[4,"ngIf"],[1,"content-center"],["name","crescent"],["name","sad",1,"ion-padding-vertical"],[1,"ion-text-center"],[3,"noticias"],["threshold","100px","position","bottom",3,"ionInfinite"],["loadingSpinner","crescent"]],template:function(n,e){1&n&&(a.Kb(0,"app-header",0),a.Ob(1,"ion-content",1),a.Ob(2,"ion-refresher",2),a.Wb("ionRefresh",function(n){return e.refreshNews(n)}),a.Kb(3,"ion-refresher-content",3),a.Nb(),a.jc(4,l,2,0,"div",4),a.Zb(5,"async"),a.jc(6,d,4,0,"div",4),a.Zb(7,"async"),a.jc(8,f,4,1,"ng-container",5),a.Zb(9,"async"),a.Nb()),2&n&&(a.zb(4),a.dc("ngIf",a.ac(5,3,e.spinnerAsync)),a.zb(2),a.dc("ngIf",!a.ac(7,5,e.spinnerAsync)&&0==e.noticias.length),a.zb(2),a.dc("ngIf",!a.ac(9,7,e.spinnerAsync)&&0!=e.noticias.length))},directives:[b.a,o.j,o.r,o.s,t.j,o.v,o.m,o.z,h.a,o.n,o.o],pipes:[t.b],styles:[""]}),n})()}];let u=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.Hb({type:n}),n.\u0275inj=a.Gb({imports:[[c.i.forChild(g)],c.i]}),n})();var w=i("j1ZV"),m=i("wf0l");let y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.Hb({type:n}),n.\u0275inj=a.Gb({imports:[[t.c,s.a,o.C,u,w.a,m.b]]}),n})()}}]);