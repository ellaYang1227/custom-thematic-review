"use strict";(self.webpackChunkcustom_thematic_review=self.webpackChunkcustom_thematic_review||[]).push([[158],{8158:(G,u,a)=>{a.r(u),a.d(u,{MemberModule:()=>B});var c=a(9808),s=a(3075),d=a(7822),f=a(1690),e=a(1223),g=a(4004),h=a(262),v=a(9646),C=a(5136),A=a(520),y=a(7556),_=a(5123),M=a(7562);let b=(()=>{class r extends C.b{constructor(n,t,m,i,l,p){super(p),this.http=n,this.router=t,this.route=m,this.authService=i,this.cryptoJsService=l,this.spinner=p}login(n){return this.http.post(this.API_ROOT+"/login",n).pipe((0,g.U)(t=>{t&&this.setAuth(t)}),(0,h.K)(t=>(console.error(t.error),(0,v.of)(t.error))))}register(n){return n.permissions=0,this.http.post(this.API_ROOT+"/register",n).pipe((0,g.U)(t=>{t&&this.setAuth(t)}),(0,h.K)(t=>(console.error(t.error),(0,v.of)(t.error))))}setAuth(n){localStorage.setItem("accessToken",n.accessToken),localStorage.setItem("user",this.cryptoJsService.encrypt(n.user));let m="";m=this.route.snapshot.queryParamMap.get("redirectUrl")||(n.user.permissions?"/scadmin/landscapes":"/landscapes"),this.router.navigate([m])}}return r.\u0275fac=function(n){return new(n||r)(e.LFG(A.eN),e.LFG(d.F0),e.LFG(d.gz),e.LFG(y.e),e.LFG(_.J),e.LFG(M.t2))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var S=a(5826);function q(r,o){1&r&&(e.TgZ(0,"font",13),e._uU(1,"*"),e.qZA())}function J(r,o){if(1&r&&(e.TgZ(0,"div",14),e._uU(1),e.qZA()),2&r){const n=e.oxw(),t=e.MAs(7);e.ekj("d-block",t.errors&&(t.errors.required||t.errors.email)),e.xp6(1),e.hij("",n.formsSchema.email.error," ")}}function w(r,o){1&r&&(e.TgZ(0,"font",13),e._uU(1,"*"),e.qZA())}function I(r,o){if(1&r&&(e.TgZ(0,"div",14),e._uU(1),e.qZA()),2&r){const n=e.oxw(),t=e.MAs(14);e.ekj("d-block",t.errors&&t.errors.required),e.xp6(1),e.hij("",n.formsSchema.password.error.default," ")}}let Z,x=(()=>{class r{constructor(n,t){this.memberService=n,this.swalDefaultService=t,this.title="\u767b\u5165",this.formsSchema=f.L,this.data={email:"",password:""},Z=this.swalDefaultService.toastDefault}ngOnInit(){}onSubmit(){this.memberService.login(this.data).subscribe(n=>{if(n){let t=n;"Cannot find user"===n?t="\u627e\u4e0d\u5230\u6b64\u7528\u6236":("Incorrect password"===n||"Password is too short"===n)&&(t="\u5bc6\u78bc\u932f\u8aa4"),Z.fire({icon:"error",title:`${this.title}\u5931\u6557`,text:t})}})}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(b),e.Y36(S.K))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-login"]],decls:19,vars:14,consts:[[3,"ngSubmit"],["form","ngForm"],[1,"mb-3"],["for","emailInput",1,"form-label"],["class","text-danger",4,"ngIf"],["id","emailInput","name","email","email","",1,"form-control",3,"type","ngModel","required","ngModelChange"],["email","ngModel"],["class","invalid-feedback text-start",3,"d-block",4,"ngIf"],["for","passwordInput",1,"form-label"],["id","passwordInput","name","password",1,"form-control",3,"type","ngModel","required","ngModelChange"],["password","ngModel"],[1,"d-grid","mt-4","pt-3"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"text-danger"],[1,"invalid-feedback","text-start"]],template:function(n,t){if(1&n&&(e.TgZ(0,"form",0,1),e.NdJ("ngSubmit",function(){return t.onSubmit()}),e.TgZ(2,"div",2)(3,"label",3),e._uU(4),e.YNc(5,q,2,0,"font",4),e.qZA(),e.TgZ(6,"input",5,6),e.NdJ("ngModelChange",function(i){return t.data.email=i}),e.qZA(),e.YNc(8,J,2,3,"div",7),e.qZA(),e.TgZ(9,"div",2)(10,"label",8),e._uU(11),e.YNc(12,w,2,0,"font",4),e.qZA(),e.TgZ(13,"input",9,10),e.NdJ("ngModelChange",function(i){return t.data.password=i}),e.qZA(),e.YNc(15,I,2,3,"div",7),e.qZA(),e.TgZ(16,"div",11)(17,"button",12),e._uU(18),e.qZA()()()),2&n){const m=e.MAs(1),i=e.MAs(7),l=e.MAs(14);e.xp6(4),e.Oqu(t.formsSchema.email.name),e.xp6(1),e.Q6J("ngIf",t.formsSchema.email.validates.isRequired),e.xp6(1),e.Q6J("type",t.formsSchema.email.type)("ngModel",t.data.email)("required",t.formsSchema.email.validates.isRequired),e.xp6(2),e.Q6J("ngIf",i.invalid&&(i.dirty||i.touched)),e.xp6(3),e.Oqu(t.formsSchema.password.name),e.xp6(1),e.Q6J("ngIf",t.formsSchema.email.validates.isRequired),e.xp6(1),e.Q6J("type",t.formsSchema.password.type)("ngModel",t.data.password)("required",t.formsSchema.password.validates.isRequired),e.xp6(2),e.Q6J("ngIf",l.invalid&&(l.dirty||l.touched)),e.xp6(2),e.Q6J("disabled",m.invalid),e.xp6(1),e.hij("\u7acb\u5373",t.title,"")}},directives:[s._Y,s.JL,s.F,c.O5,s.Fj,s.on,s.JJ,s.On,s.Q7],styles:[""]}),r})();var R=a(9451),U=a(2313);let T;function Y(r,o){1&r&&(e.TgZ(0,"font",16),e._uU(1,"*"),e.qZA())}function F(r,o){if(1&r&&(e.TgZ(0,"div",17),e._uU(1),e.qZA()),2&r){const n=e.oxw(),t=e.MAs(7);e.ekj("d-block",t.errors&&(t.errors.required||t.errors.email)),e.xp6(1),e.hij("",n.formsSchema.email.error," ")}}function Q(r,o){1&r&&(e.TgZ(0,"font",16),e._uU(1,"*"),e.qZA())}function j(r,o){if(1&r&&(e.TgZ(0,"div",17),e._uU(1),e.qZA()),2&r){const n=e.oxw(),t=e.MAs(14);e.ekj("d-block",t.errors&&(t.errors.required||t.errors.pattern)),e.xp6(1),e.hij("",n.formsSchema.password.error.default," ")}}function N(r,o){1&r&&(e.TgZ(0,"font",16),e._uU(1,"*"),e.qZA())}function O(r,o){if(1&r&&(e.TgZ(0,"div",17),e._uU(1),e.qZA()),2&r){const n=e.oxw(),t=e.MAs(21);e.ekj("d-block",t.errors&&(t.errors.required||t.errors.minlength)),e.xp6(1),e.hij("",n.formsSchema.name.error," ")}}const D=[{path:"",component:(()=>{class r{constructor(n,t,m){this.titleServer=n,this.router=t,this.spinner=m,this.router.events.subscribe(i=>{i instanceof d.m2&&(this.title=location.pathname.match("login")?"\u767b\u5165":"\u8a3b\u518a",this.titleServer.setTitle(`${this.title} | ${R.Y.name}`),this.spinner.hide())})}ngOnInit(){}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(U.Dx),e.Y36(d.F0),e.Y36(M.t2))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-member"]],decls:7,vars:1,consts:[[1,"row","justify-content-md-center"],[1,"col-md-4"],[1,"card","rounded-3"],[1,"card-body","p-5"],[1,"card-title","text-primary","border-bottom","pb-2","mb-4"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),e._uU(5),e.qZA(),e._UZ(6,"router-outlet"),e.qZA()()()()),2&n&&(e.xp6(5),e.Oqu(t.title))},directives:[d.lC],styles:[""]}),r})(),children:[{path:"login",component:x},{path:"register",component:(()=>{class r{constructor(n,t){this.memberService=n,this.swalDefaultService=t,this.title="\u8a3b\u518a",this.formsSchema=f.L,this.data={email:"",password:"",name:""},T=this.swalDefaultService.toastDefault}ngOnInit(){}onSubmit(){this.memberService.register(this.data).subscribe(n=>{n&&T.fire({icon:"error",title:`${this.title}\u5931\u6557`,text:"Email already exists"===n?"Email \u4fe1\u7bb1\u5df2\u5b58\u5728":n})})}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(b),e.Y36(S.K))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-register"]],decls:26,vars:22,consts:[[3,"ngSubmit"],["form","ngForm"],[1,"mb-3"],["for","emailInput",1,"form-label"],["class","text-danger",4,"ngIf"],["id","emailInput","name","email","email","",1,"form-control",3,"type","ngModel","required","ngModelChange"],["email","ngModel"],["class","invalid-feedback text-start",3,"d-block",4,"ngIf"],["for","passwordInput",1,"form-label"],["id","passwordInput","name","password",1,"form-control",3,"type","ngModel","required","pattern","ngModelChange"],["password","ngModel"],["for","nameInput",1,"form-label"],["id","nameInput","name","name",1,"form-control",3,"type","ngModel","required","minlength","ngModelChange"],["name","ngModel"],[1,"d-grid","mt-4","pt-3"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"text-danger"],[1,"invalid-feedback","text-start"]],template:function(n,t){if(1&n&&(e.TgZ(0,"form",0,1),e.NdJ("ngSubmit",function(){return t.onSubmit()}),e.TgZ(2,"div",2)(3,"label",3),e._uU(4),e.YNc(5,Y,2,0,"font",4),e.qZA(),e.TgZ(6,"input",5,6),e.NdJ("ngModelChange",function(i){return t.data.email=i}),e.qZA(),e.YNc(8,F,2,3,"div",7),e.qZA(),e.TgZ(9,"div",2)(10,"label",8),e._uU(11),e.YNc(12,Q,2,0,"font",4),e.qZA(),e.TgZ(13,"input",9,10),e.NdJ("ngModelChange",function(i){return t.data.password=i}),e.qZA(),e.YNc(15,j,2,3,"div",7),e.qZA(),e.TgZ(16,"div",2)(17,"label",11),e._uU(18),e.YNc(19,N,2,0,"font",4),e.qZA(),e.TgZ(20,"input",12,13),e.NdJ("ngModelChange",function(i){return t.data.name=i}),e.qZA(),e.YNc(22,O,2,3,"div",7),e.qZA(),e.TgZ(23,"div",14)(24,"button",15),e._uU(25),e.qZA()()()),2&n){const m=e.MAs(1),i=e.MAs(7),l=e.MAs(14),p=e.MAs(21);e.xp6(4),e.Oqu(t.formsSchema.email.name),e.xp6(1),e.Q6J("ngIf",t.formsSchema.email.validates.isRequired),e.xp6(1),e.Q6J("type",t.formsSchema.email.type)("ngModel",t.data.email)("required",t.formsSchema.email.validates.isRequired),e.xp6(2),e.Q6J("ngIf",i.invalid&&(i.dirty||i.touched)),e.xp6(3),e.Oqu(t.formsSchema.password.name),e.xp6(1),e.Q6J("ngIf",t.formsSchema.password.validates.isRequired),e.xp6(1),e.Q6J("type",t.formsSchema.password.type)("ngModel",t.data.password)("required",t.formsSchema.password.validates.isRequired)("pattern",t.formsSchema.password.validates.pattern),e.xp6(2),e.Q6J("ngIf",l.invalid&&(l.dirty||l.touched)),e.xp6(3),e.Oqu(t.formsSchema.name.name),e.xp6(1),e.Q6J("ngIf",t.formsSchema.name.validates.isRequired),e.xp6(1),e.Q6J("type",t.formsSchema.name.type)("ngModel",t.data.name)("required",t.formsSchema.name.validates.isRequired)("minlength",t.formsSchema.name.validates.minlength),e.xp6(2),e.Q6J("ngIf",p.invalid&&(p.dirty||p.touched)),e.xp6(2),e.Q6J("disabled",m.invalid),e.xp6(1),e.hij("\u7acb\u5373",t.title,"")}},directives:[s._Y,s.JL,s.F,c.O5,s.Fj,s.on,s.JJ,s.On,s.Q7,s.c5,s.wO],styles:[""]}),r})()},{path:"**",redirectTo:"/member/login",pathMatch:"full"}]}];let k=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[d.Bz.forChild(D)],d.Bz]}),r})(),B=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[c.ez,k,s.u5]]}),r})()}}]);