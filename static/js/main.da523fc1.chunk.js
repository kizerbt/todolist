(window.webpackJsonptodolist=window.webpackJsonptodolist||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},20:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(5),s=a.n(l),c=a(8),m=a(6),r=a(7),d=a(10),o=a(9),u=function(e){return i.a.createElement("li",{className:"list-group-item text-capitalize d-flex justify-content-between my-2"},i.a.createElement("h6",null,e.title),i.a.createElement("div",{className:"todo-icon"},i.a.createElement("span",{className:"mx-2 text-success",onClick:e.handleEdit},i.a.createElement("i",{className:"fas fa-pen"})),i.a.createElement("span",{className:"mx-2 text-danger",onClick:e.handleDelete},i.a.createElement("i",{className:"fas fa-trash"}))))},h=function(e){return i.a.createElement("ul",{className:"list-group my-5"},i.a.createElement("h3",{className:"text-capitalize text-center"},"todo list"),e.items.map((function(t){return i.a.createElement(u,{key:t.id,title:t.title,handleEdit:function(){e.handleEdit(t.id)},handleDelete:function(){return e.handleDelete(t.id)}})})),0===e.items.length?i.a.createElement("p",null,"No items"):i.a.createElement("button",{type:"button",className:"btn btn-danger btn-block text-uppercase mt-5",onClick:e.clearList},"clear list"))},p=a(1),f=a.n(p),E=function(e){return i.a.createElement("div",{className:"card card-body my-3"},i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",{className:"input-group"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("div",{className:"input-group-text bg-success text-white"},i.a.createElement("i",{className:"fas fa-book"}))),i.a.createElement("input",{type:"text",className:"form-control text-capitalize",placeholder:"Add item",value:e.item,onChange:e.handleChange})),i.a.createElement("button",{type:"submit",disabled:!e.item,className:"btn btn-block mt-3 text-uppercase ".concat(e.editItem?"btn-success":"btn-primary")},e.editItem?"edit item":"add item")))},b=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).clearList=function(){n.setState({items:[]})},n.handleChange=function(e){n.setState({item:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t={id:n.state.id,title:n.state.item},a=[].concat(Object(c.a)(n.state.items),[t]);n.setState({items:a,item:"",id:f()(),editItem:!1})},n.handleDelete=function(e){var t=n.state.items.filter((function(t){return t.id!==e}));n.setState({items:t})},n.handleEdit=function(e){var t=n.state.items.filter((function(t){return t.id!==e})),a=n.state.items.find((function(t){return t.id===e}));n.setState({items:t,item:a.title,id:e,editItem:!0})},n.state={items:[{id:1,title:"Learn React"},{id:2,title:"Use functional components"},{id:3,title:"Use state"}],item:"",id:f()(),editItem:!1},n}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-10 mx-auto col-md-8 mt-5"},i.a.createElement(h,{items:this.state.items,clearList:this.clearList,handleDelete:this.handleDelete,handleEdit:this.handleEdit}),i.a.createElement(E,{item:this.state.item,handleChange:this.handleChange,handleSubmit:this.handleSubmit,editItem:this.state.editItem}))))}}]),a}(i.a.Component);a(18),a(19);s.a.render(i.a.createElement(b,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.da523fc1.chunk.js.map