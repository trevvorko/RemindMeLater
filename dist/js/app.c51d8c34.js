(function(e){function t(t){for(var a,n,i=t[0],c=t[1],d=t[2],u=0,m=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&m.push(r[n][0]),r[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(m.length)m.shift()();return o.push.apply(o,d||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],a=!0,i=1;i<s.length;i++){var c=s[i];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=n(n.s=s[0]))}return e}var a={},r={app:0},o=[];function n(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=a,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=c;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0f62":function(e,t,s){e.exports=s.p+"img/user.47be60ba.svg"},"20e9":function(e,t,s){"use strict";s("42c0")},"3b70":function(e,t,s){"use strict";s("8cc1")},"42c0":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=s("03a5"),o=s.n(r),n=(s("c5c5"),s("9537"),s("3e48"),s("ab8b"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)}),i=[],c=s("2877"),d={},l=Object(c["a"])(d,n,i,!1,null,null,null),u=l.exports,m=(s("45fc"),s("8c4f")),p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("Nav"),s("div",{staticClass:"container align-center"},[0===e.courses.length?s("span",[e._v("No courses found, click the add course button to get started!")]):e._e(),s("button",{staticClass:"btn btn-outline-primary my-2 mh-sm-0 mx-5",attrs:{"data-toggle":"dropdown"}},[e._v("Add Course")]),s("form",{staticClass:"dropdown-menu p-4",attrs:{autocomplete:"off"}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.courseName,expression:"courseName"}],staticClass:"form-control my-1",attrs:{type:"test",id:"taskTitleInput",placeholder:"Course Name"},domProps:{value:e.courseName},on:{input:function(t){t.target.composing||(e.courseName=t.target.value)}}}),s("button",{staticClass:"btn btn-primary mt-1",attrs:{type:"submit"},on:{click:e.addCourse}},[e._v("Add Course")])])]),0!==e.courses.length?s("button",{staticClass:"btn btn-outline-secondary my-2 mh-sm-0 ",on:{click:function(t){e.editMode=!e.editMode}}},[e.editMode?s("span",[e._v("Done")]):s("span",[e._v("Edit")])]):e._e(),s("ul",{attrs:{id:"CourseList"}},e._l(e.courses,(function(t){return s("li",{key:t.created.seconds},[s("Course",{attrs:{data:t,editMode:e.editMode,removeFunction:e.deleteCourse,mainKey:t.created.seconds}})],1)})),0)])],1)},v=[],f=(s("c740"),s("a434"),s("498a"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand mb-0",attrs:{to:"/"}},[a("h1",[e._v("RemindMeLater")])]),a("div",{staticClass:"nav-item dropdown"},[e._m(0),a("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"dropdownMenuLink"}},[a("router-link",{staticClass:"dropdown-item",attrs:{to:"/"}},[a("img",{attrs:{src:s("86e6"),height:"15",width:"15"}}),e._v(" Home")]),a("router-link",{staticClass:"dropdown-item",attrs:{to:"/settings"}},[a("img",{attrs:{src:s("e9b0"),height:"15",width:"15"}}),e._v(" Settings")]),a("button",{staticClass:"dropdown-item text-danger",on:{click:e.signOut}},[a("img",{attrs:{src:s("81ca"),height:"15",width:"15"}}),e._v(" Sign out")])],1)])],1)}),h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"nav-link dropdown-toggle",attrs:{role:"button","data-display":"static",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("img",{attrs:{height:"30",width:"30",src:s("0f62"),alt:"user icon"}})])}],g=s("260b"),w=(s("ea7b"),{name:"Nav",methods:{signOut:function(){g["a"].auth().signOut().then((function(){ne.push("/signin")})).catch((function(){}))}}}),b=w,_=Object(c["a"])(b,f,h,!1,null,"0c00389c",null),C=_.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card my-3 bg-light"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"row justify-content-between"},[a("h3",{staticClass:"my-auto mx-4",style:{color:this.color}},[e._v(e._s(e.data.title))]),e.editMode?a("div",{staticClass:"dropdown"},[a("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v(" Change Color ")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},e._l(e.possibleColors,(function(t){return a("button",{key:t,staticClass:"btn",style:{color:t},on:{click:function(s){return e.changeColor(t,e.mainKey)}}},[e._v(e._s(t))])})),0)]):e._e(),e.editMode?a("button",{staticClass:"btn btn-lg btn-danger my-3 mx-2 mh-sm-0",on:{click:function(t){return e.removeFunction(e.data.created.seconds,e.mainKey)}}},[e._v("X")]):e._e()])]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row text-center"},[e.editMode?a("div",{staticClass:"col"},[e.editMode?a("h5",[e._v("Edit")]):e._e()]):e._e(),e._m(0),a("div",{staticClass:"col"},[a("h5",{on:{click:e.changeSort}},[e._v("Date"),a("img",{class:["ascending"===e.sortBy?"down":""],attrs:{height:"18",width:"18",src:s("b94f")}})])]),a("div",{staticClass:"col"},[e.editMode?a("h5",[e._v("Remove")]):a("h5",[e._v("Complete")])])]),a("ul",{staticClass:"container",attrs:{id:"TaskList"}},e._l(e.sortedArray,(function(t){return a("li",{key:t.created.seconds},[a("div",{staticClass:"row text-center"},[e.editMode?a("div",{staticClass:"col col-sm"},[e.editMode&&!t.completed&&(!e.taskEditMode||e.taskEditMode&&e.editKey!=t.created.seconds)?a("button",{staticClass:"btn btn-sm btn-outline-success my-3",on:{click:function(s){e.taskEditMode=!e.taskEditMode,e.editKey=t.created.seconds,e.editName=t.name,e.setEditDate(t.due)}}},[e._v("Edit")]):e._e(),e.editMode&&!t.completed&&e.taskEditMode&&e.editKey==t.created.seconds?a("button",{staticClass:"btn btn-sm btn-outline-danger my-3 mx-2 mh-sm-0",on:{click:function(t){e.taskEditMode=!e.taskEditMode}}},[e._v("Cancel")]):e._e(),e.taskEditMode&&e.editKey==t.created.seconds?a("button",{staticClass:"btn btn-sm btn-outline-primary my-3 mx-2 mh-sm-0",on:{click:function(s){e.editTask(t.created.seconds,e.mainKey),e.taskEditMode=!e.taskEditMode}}},[e._v("Done")]):e._e()]):e._e(),a("div",{staticClass:"col my-auto"},[!0===t.completed?a("strike",[e._v(e._s(t.name))]):e.editMode&&e.taskEditMode&&e.editKey===t.created.seconds?a("input",{directives:[{name:"model",rawName:"v-model",value:e.editName,expression:"editName"}],attrs:{type:"text"},domProps:{value:e.editName},on:{input:function(t){t.target.composing||(e.editName=t.target.value)}}}):a("span",[e._v(e._s(t.name))])],1),a("div",{staticClass:"col my-auto"},[!0===t.completed?a("strike",[e._v("Due: "+e._s(e.formatDate(t.due)))]):e.editMode&&e.taskEditMode&&e.editKey===t.created.seconds?a("input",{directives:[{name:"model",rawName:"v-model",value:e.editDate,expression:"editDate"}],attrs:{type:"date"},domProps:{value:e.editDate},on:{input:function(t){t.target.composing||(e.editDate=t.target.value)}}}):a("span",[e._v("Due: "+e._s(e.formatDate(t.due)))])],1),a("div",{staticClass:"col my-auto"},[e.editMode?e._e():a("button",{staticClass:"btn btn-sm my-3 mx-2 mh-sm-0",class:[t.completed?"btn-success":"btn-outline-success"],on:{click:function(s){return e.completeTask(t.created.seconds,e.mainKey)}}},[t.completed?a("span",[e._v(" ✓ ")]):a("span",[a("br")])]),e.editMode?a("button",{staticClass:"btn btn-sm btn-outline-danger my-3 mx-2 mh-sm-0",on:{click:function(s){return e.removeTask(t.created.seconds,e.mainKey)}}},[e._v("X")]):e._e()])])])})),0)]),a("div",{staticClass:"col-lg-6 mx-auto"},[a("form",{staticClass:"dropdown-menu p-4",attrs:{autocomplete:"off"}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"taskTitleInput"}},[e._v("Task Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.taskName,expression:"taskName"}],staticClass:"form-control",attrs:{type:"test",id:"taskTitleInput",placeholder:"Reminder Name"},domProps:{value:e.taskName},on:{input:function(t){t.target.composing||(e.taskName=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"dueDateInput"}},[e._v("Due Date")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.taskDate,expression:"taskDate"}],staticClass:"form-control",attrs:{type:"date",id:"dueDateInput"},domProps:{value:e.taskDate},on:{input:function(t){t.target.composing||(e.taskDate=t.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(t){return e.addTask(e.mainKey)}}},[e._v("Add Task")])]),a("button",{staticClass:"btn btn-block btn-outline-primary my-2 mh-sm-0 ",attrs:{"data-toggle":"dropdown"}},[e._v("Add Task")])])])},k=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col"},[s("h5",[e._v("Name")])])}],P=(s("fb6a"),s("b0c0"),s("a9e3"),s("ac1f"),s("1276"),s("2909")),x=(s("e71f"),{name:"Course",props:{data:Object,editMode:Boolean,removeFunction:Function,mainKey:Number},data:function(){return{color:this.data.color,reminders:this.data.reminders,taskName:"",taskDate:"",editName:"",editDate:"",possibleColors:["blue","indigo","purple","pink","red","orange","green","teal","black"],sortBy:"ascending",taskEditMode:!1,editKey:0}},computed:{sortedArray:function(){var e=Object(P["a"])(this.reminders);function t(e,t){return e.due.seconds>t.due.seconds?-1:e.due.seconds<t.due.seconds?1:0}function s(e,t){return e.due.seconds<t.due.seconds?-1:e.due.seconds>t.due.seconds?1:0}return"ascending"===this.sortBy?e.sort(s):e.sort(t)}},methods:{changeSort:function(){"ascending"===this.sortBy?this.sortBy="descending":this.sortBy="ascending"},changeColor:function(e,t){this.color=e;var s=g["a"].auth().currentUser.uid,a=g["a"].firestore().collection("users").doc(s);a.get().then((function(s){var r=s.data(),o=r["courses"],n=o.findIndex((function(e){return e.created.seconds===t})),i=o[n];i["color"]=e,a.set(r)}))},completeTask:function(e,t){var s=this.reminders.findIndex((function(t){return t.created.seconds===e}));this.reminders[s].completed=!this.reminders[s].completed;var a=g["a"].auth().currentUser.uid,r=g["a"].firestore().collection("users").doc(a);r.get().then((function(e){var a=e.data(),o=a["courses"],n=o.findIndex((function(e){return e.created.seconds===t})),i=o[n],c=i["reminders"],d=c[s];d.completed=!d.completed,r.set(a)}))},addTask:function(e){if(""===this.taskName.trim())return this.taskName="",this.taskDate="",void alert("Task name should not be empty");if(""===this.taskDate.trim())return this.taskName="",this.taskDate="",void alert("Task date should not be empty");console.log(this.taskDate);var t=this.taskDate.split("-"),s=new Date(t[0],t[1]-1,t[2]),a=g["a"].firestore.Timestamp.fromDate(s);console.log(s);var r={name:this.taskName,due:a,completed:!1,created:g["a"].firestore.Timestamp.now()};this.reminders.push(r);var o=g["a"].auth().currentUser.uid,n=g["a"].firestore().collection("users").doc(o);n.get().then((function(t){var s=t.data(),a=s["courses"],o=a.findIndex((function(t){return t.created.seconds===e})),i=a[o];i["reminders"].push(r),n.set(s)})),this.taskName="",this.taskDate=""},editTask:function(e,t){if(""===this.editName.trim())return this.editName="",this.editDate="",void alert("Task name should not be empty");var s=this.reminders.findIndex((function(t){return e===t.created.seconds})),a=this.editDate.split("-"),r=new Date(a[0],a[1]-1,a[2]),o=g["a"].firestore.Timestamp.fromDate(r);this.reminders[s].due=o,this.reminders[s].name=this.editName;var n={name:this.editName,due:o,completed:this.reminders[s].completed,created:this.reminders[s].created},i=g["a"].auth().currentUser.uid,c=g["a"].firestore().collection("users").doc(i);c.get().then((function(s){var a=s.data(),r=a["courses"],o=r.findIndex((function(e){return e.created.seconds===t})),i=r[o],d=i["reminders"].findIndex((function(t){return e===t.created.seconds}));i["reminders"][d]=n,c.set(a)}))},removeTask:function(e,t){if(confirm("Remove this task?")){var s=this.reminders.findIndex((function(t){return e===t.created.seconds}));this.reminders.splice(s,1);var a=g["a"].auth().currentUser.uid,r=g["a"].firestore().collection("users").doc(a);r.get().then((function(e){var a=e.data(),o=a["courses"],n=o.findIndex((function(e){return e.created.seconds===t})),i=o[n],c=i["reminders"];c.splice(s,1),r.set(a)}))}},formatDate:function(e){var t=new g["a"].firestore.Timestamp(e.seconds,e.nanoseconds).toDate();return t.toLocaleDateString()},setEditDate:function(e){e&&(this.editDate=e.toDate().toISOString().slice(0,10),console.log(this.editDate))}}}),D=x,N=(s("20e9"),Object(c["a"])(D,y,k,!1,null,"e25da00c",null)),M=N.exports,E={name:"Home",data:function(){return{courses:[],courseName:"",editMode:!1}},components:{Nav:C,Course:M},created:function(){this.setCourses()},methods:{setCourses:function(){var e=this.courses,t=g["a"].auth().currentUser.uid,s=g["a"].firestore().collection("users").doc(t);s.get().then((function(t){if(t.exists)for(var s=t.data(),a=0;a<s.courses.length;++a){var r=s.courses[a];e.push(r)}else console.log("No such document!")}))},addCourse:function(){if(""!==this.courseName.trim()){var e={title:this.courseName,reminders:[],created:g["a"].firestore.Timestamp.now(),color:"black"};this.courses.push(e);var t=g["a"].auth().currentUser.uid,s=g["a"].firestore().collection("users").doc(t);s.update({courses:g["a"].firestore.FieldValue.arrayUnion(e)}),this.courseName=""}else alert("Course name should not be empty")},deleteCourse:function(e){if(confirm("Remove this course?")){var t=this.courses.findIndex((function(t){return t.created.seconds===e}));this.courses.splice(t,1);var s=g["a"].auth().currentUser.uid,a=g["a"].firestore().collection("users").doc(s);a.get().then((function(e){var s=e.data(),r=s["courses"];r.splice(t,1),a.set(s)}))}}}},S=E,A=(s("3b70"),Object(c["a"])(S,p,v,!1,null,"14265409",null)),I=A.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"row vh-100 align-items-center"},[s("div",{staticClass:"col-lg-6 offset-lg-2 rounded shadow-lg p-3 mb-5 bg-white align-self-center d-inline-flex"},[s("div",{staticClass:"container m-2"},[s("h1",[e._v("RemindMeLater!")]),s("h5",[e._v("Sign In")]),s("form",[s("div",{staticClass:"row p-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.forms[0].value,expression:"forms[0].value"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.forms[0].value},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.signIn(t)},input:function(t){t.target.composing||e.$set(e.forms[0],"value",t.target.value)}}}),e.forms[0].error?s("span",{staticClass:"text-danger"},[e._v(e._s(e.forms[0].error))]):e._e()]),s("div",{staticClass:"row p-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.forms[1].value,expression:"forms[1].value"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.forms[1].value},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.signIn(t)},input:function(t){t.target.composing||e.$set(e.forms[1],"value",t.target.value)}}}),e.forms[1].error?s("div",{staticClass:"text-danger"},[e._v(e._s(e.forms[1].error))]):e._e(),e.showSignUpScreen?e._e():s("div",[s("a",{staticClass:"small",on:{click:e.forgotPassword}},[e._v("Forgot password?")])])]),s("transition",{attrs:{name:"fade"}},[e.showSignUpScreen?s("div",{staticClass:"row p-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.forms[2].value,expression:"forms[2].value"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Confirm Password"},domProps:{value:e.forms[2].value},on:{input:function(t){t.target.composing||e.$set(e.forms[2],"value",t.target.value)}}}),e.forms[2].error?s("span",{staticClass:"text-danger"},[e._v(e._s(e.forms[2].error))]):e._e()]):e._e()]),s("div",{staticClass:"row p-1"},[s("div",{staticClass:"col-md-4 offset-md-4"},[e.showSignUpScreen?s("div",[s("button",{staticClass:"btn btn-primary btn-block mx-auto",attrs:{type:"button"},on:{click:function(t){return e.registerUser()}}},[e._v("Create Account")]),s("button",{staticClass:"btn btn-secondary btn-block mx-auto",attrs:{type:"button"},on:{click:function(t){e.showSignUpScreen=!1}}},[e._v("Back")])]):s("div",[s("button",{staticClass:"btn btn-block btn-primary mx-auto",attrs:{type:"button"},on:{click:e.signIn}},[e._v("Sign In")]),s("button",{staticClass:"btn btn-secondary btn-block mx-auto",attrs:{type:"button"},on:{click:function(t){e.showSignUpScreen=!0}}},[e._v("Create Account")])])])])],1)])])])])},T=[],U=(s("4160"),s("159b"),{name:"SignIn",data:function(){return{showSignUpScreen:!1,forms:[{key:"Email",value:"",error:""},{key:"Password",value:"",error:""},{key:"Confirmed password",value:"",error:""}]}},methods:{signIn:function(){var e=this;if(!j(this.showSignUpScreen,this.forms)){var t=this.forms[0].value,s=this.forms[1].value;g["a"].auth().signInWithEmailAndPassword(t,s).then((function(){console.log("Signed in"),ne.push("/")})).catch((function(t){console.log(t),e.forms[1].error="An error occurred while signing in. Confirm email and password are correct."}))}},registerUser:function(){var e=this;if(!j(this.showSignUpScreen,this.forms)){var t=this.forms[0].value,s=this.forms[1].value;g["a"].auth().createUserWithEmailAndPassword(t,s).then((function(e){var t=e.user.uid,s=g["a"].firestore().collection("users").doc(t);s.set({courses:[]}),ne.push("/")})).catch((function(t){"auth/email-already-in-use"===t.code?e.forms[2].error="Email is already in use":e.forms[2].error="An error occurred while signing up",console.log(t.message)}))}},forgotPassword:function(){ne.push("/forgot")}}}),j=function(e,t){var s=!1;return t.forEach((function(t){("Confirmed password"!==t.key||e)&&(t.value?t.error="":(s=!0,t.error=t.key+" should not be blank. Please enter in a value for the "+t.key.toLowerCase()))})),e&&(t[1].value===t[2].value||t[1].error||t[2].error||(t[2].error="Passwords do not match",s=!0)),s},$=U,K=Object(c["a"])($,O,T,!1,null,null,null),F=K.exports,B=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"row vh-100 align-items-center"},[s("div",{staticClass:"col-lg-6 offset-lg-2 rounded shadow-lg p-3 mb-5 bg-white align-self-center d-inline-flex"},[s("div",{staticClass:"container m-2"},[s("h1",[e._v("RemindMeLater!")]),s("h5",[e._v("Password Reset")]),s("form",[e.emailSent?e._e():s("div",{staticClass:"row p-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.email.value,expression:"email.value"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email.value},on:{input:function(t){t.target.composing||e.$set(e.email,"value",t.target.value)}}}),e.email.error?s("span",{staticClass:"text-danger"},[e._v(e._s(e.email.error))]):e._e()]),s("div",{staticClass:"row p-1"},[s("div",{staticClass:"col-md-4 offset-md-4"},[e.emailSent?s("h5",[e._v("Email Sent!")]):e._e(),e.emailSent?e._e():s("button",{staticClass:"btn btn-primary btn-block mx-auto",attrs:{type:"button"},on:{click:function(t){return e.resetPassword()}}},[e._v("Request Reset")]),s("button",{staticClass:"btn btn-secondary btn-block mx-auto",attrs:{type:"button"},on:{click:function(t){return e.backToSignIn()}}},[e._v("Back")])])])])])])])])},R=[],L={name:"ForgotPassword",data:function(){return{email:{value:"",error:""},emailSent:!1}},methods:{resetPassword:function(){var e=this;/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email.value)?(this.email.error="",g["a"].auth().sendPasswordResetEmail(this.email.value).then((function(){e.emailSent=!0})).catch((function(t){console.log(t),e.email.error="An error occured while sending password reset email"}))):this.email.error="This value should be an email address"},backToSignIn:function(){ne.push("/signin")}}},H=L,q=Object(c["a"])(H,B,R,!1,null,null,null),z=q.exports,G=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"container text-center"},[s("h2",{staticClass:"mt-5"},[e._v("404 Page Not Found :(")]),s("br"),s("h5",[e._v("Go "),s("router-link",{attrs:{to:"/"}},[e._v("Home")])],1)])])},W=[],J={name:"PageNotFound"},V=J,Z=Object(c["a"])(V,G,W,!1,null,"73180822",null),X=Z.exports,Y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("Nav"),s("div",{staticClass:"container"},[s("div",{staticClass:"card mt-5"},[s("div",{staticClass:"card-body"},[s("h2",{staticClass:"card-title"},[e._v("User Profile")]),s("div",[s("h6",[e._v("Email")]),s("p",[e._v(e._s(e.getUserEmail()))])]),s("h6",[e._v("Change Password")]),s("form",[s("div",{staticClass:"row p-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentPassword.value,expression:"currentPassword.value"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Current Password"},domProps:{value:e.currentPassword.value},on:{input:function(t){t.target.composing||e.$set(e.currentPassword,"value",t.target.value)}}}),e.currentPassword.error?s("span",{staticClass:"text-danger"},[e._v(e._s(e.currentPassword.error))]):e._e()]),s("div",{staticClass:"row p-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newPassword.value,expression:"newPassword.value"}],staticClass:"form-control",attrs:{type:"password",placeholder:"New Password"},domProps:{value:e.newPassword.value},on:{input:function(t){t.target.composing||e.$set(e.newPassword,"value",t.target.value)}}})]),s("div",{staticClass:"row p-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.copyPassword.value,expression:"copyPassword.value"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Confirm New Password"},domProps:{value:e.copyPassword.value},on:{input:function(t){t.target.composing||e.$set(e.copyPassword,"value",t.target.value)}}}),e.copyPassword.error?s("span",{staticClass:"text-danger"},[e._v(e._s(e.copyPassword.error))]):e._e()]),s("div",{staticClass:"row p-1"},[s("button",{staticClass:"btn btn-primary",on:{click:e.attemptPasswordChange}},[e._v("Confirm")])]),s("div",{staticClass:"row p-1"},[e.successMessage?s("span",{staticClass:"text-success"},[e._v(e._s(e.successMessage))]):e._e()])]),s("h6",[e._v("Delete Account")]),s("div",{staticClass:"row p-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentPasswordDelete.value,expression:"currentPasswordDelete.value"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Current Password"},domProps:{value:e.currentPasswordDelete.value},on:{input:function(t){t.target.composing||e.$set(e.currentPasswordDelete,"value",t.target.value)}}}),e.currentPasswordDelete.error?s("span",{staticClass:"text-danger"},[e._v(e._s(e.currentPasswordDelete.error))]):e._e()]),s("div",{staticClass:"row p-1"},[e.clickedDeleteOnce?e._e():s("button",{staticClass:"btn btn-warning",on:{click:function(t){e.clickedDeleteOnce=!0}}},[e._v("Delete")]),e.clickedDeleteOnce?s("button",{staticClass:"btn btn-danger",on:{click:e.deleteAccount}},[e._v("CONFIRM DELETE")]):e._e()])])]),e._m(0)])],1)},Q=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card mt-5 bg-light"},[s("div",{staticClass:"card-body"},[s("h2",{staticClass:"card-title"},[e._v("Acknowledgements")]),s("div",[s("div",[e._v("Icons made by "),s("a",{attrs:{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"}},[e._v("Freepik")]),e._v(" from "),s("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[e._v("www.flaticon.com")])]),s("div",[e._v("Icons made by "),s("a",{attrs:{href:"https://www.flaticon.com/authors/pixel-perfect",title:"Pixel perfect"}},[e._v("Pixel perfect")]),e._v(" from "),s("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[e._v("www.flaticon.com")])]),s("div",[e._v("Icons made by "),s("a",{attrs:{href:"https://www.flaticon.com/authors/becris",title:"Becris"}},[e._v("Becris")]),e._v(" from "),s("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[e._v("www.flaticon.com")])])])])])}],ee={name:"Settings",data:function(){return{currentPassword:{value:"",error:""},newPassword:{value:""},copyPassword:{value:"",error:""},currentPasswordDelete:{value:"",error:""},successMessage:"",clickedDeleteOnce:!1}},components:{Nav:C},methods:{deleteAccount:function(){var e=this,t=g["a"].auth().currentUser,s=g["a"].auth.EmailAuthProvider.credential(t.email,this.currentPasswordDelete.value);t.reauthenticateWithCredential(s).then((function(){e.currentPasswordDelete.error="",t.delete().then((function(){g["a"].firestore().collection("users").doc(t.uid).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)})),alert("Account has been deleted"),ne.push("/")})).catch((function(t){console.log(t),e.currentPasswordDelete.error="An error occured while verifying current password"}))})).catch((function(t){console.log(t),e.currentPasswordDelete.error="An error occured while verifying current password"}))},attemptPasswordChange:function(){var e=this;this.successMessage="";var t=g["a"].auth().currentUser,s=g["a"].auth.EmailAuthProvider.credential(t.email,this.currentPassword.value);t.reauthenticateWithCredential(s).then((function(){e.currentPassword.error="",e.newPassword.value==e.copyPassword.value?t.updatePassword(e.newPassword.value).then((function(){e.currentPassword.value="",e.newPassword.value="",e.copyPassword.value="",e.successMessage="Successfully changed password",e.copyPassword.error=""})).catch((function(t){console.log(t),e.copyPassword.error="An error occured while resetting your password"})):e.copyPassword.error="Passwords do not match"})).catch((function(t){console.log(t),e.currentPassword.error="An error occured while verifying current password"}))},getUserEmail:function(){return g["a"].auth().currentUser.email}}},te=ee,se=Object(c["a"])(te,Y,Q,!1,null,null,null),ae=se.exports;a["a"].use(m["a"]);var re=[{path:"/",name:"Home",component:I,meta:{requiresAuth:!0}},{path:"/signin",name:"Sign In",component:F,meta:{requiresAuth:!1}},{path:"/forgot",name:"Forgot Password",component:z,meta:{requiresAuth:!1}},{path:"/settings",name:"Settings",component:ae,meta:{requiresAuth:!0}},{path:"*",component:X}],oe=new m["a"]({routes:re});oe.beforeEach((function(e,t,s){g["a"].auth().onAuthStateChanged((function(t){console.log(e),null===t||"/signin"!==e.path&&"/forgot"!==e.path?e.matched.some((function(e){return e.meta.requiresAuth}))?t?s():s({path:"/signin"}):s():s({path:"/"})}))}));var ne=oe;a["a"].use(o.a);var ie={apiKey:"AIzaSyAYpwiSN3dIHJHjK3AKB1TVNcv-Ox2nM6c",authDomain:"remindmelater-21a9a.firebaseapp.com",databaseURL:"https://remindmelater-21a9a.firebaseio.com",projectId:"remindmelater-21a9a",storageBucket:"remindmelater-21a9a.appspot.com",messagingSenderId:"31526676206",appId:"1:31526676206:web:4dabf6998b3093097ef5ff",measurementId:"G-PH3G2DMG3V"};g["a"].initializeApp(ie),a["a"].config.productionTip=!1,new a["a"]({router:ne,render:function(e){return e(u)}}).$mount("#app")},"81ca":function(e,t,s){e.exports=s.p+"img/sign-out.bec6196d.svg"},"86e6":function(e,t,s){e.exports=s.p+"img/home.966e5d31.svg"},"8cc1":function(e,t,s){},b94f:function(e,t,s){e.exports=s.p+"img/arrow.13e1a3ad.svg"},e9b0:function(e,t,s){e.exports=s.p+"img/settings.2dfb9ff4.svg"}});
//# sourceMappingURL=app.c51d8c34.js.map