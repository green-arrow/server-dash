Ember.TEMPLATES["account"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"container\">\n    <form role=\"form\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "doUpdate", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n        <div class=\"row\">\n            <div class=\"col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n                <h3>Update Account</h3>\n                <p>You may update your e-mail address and / or password.</p>\n                ");
  data.buffer.push(escapeExpression((helper = helpers['error-alert'] || (depth0 && depth0['error-alert']),options={hash:{
    'hasError': ("hasError"),
    'header': ("errorHeader"),
    'message': ("errorMessage"),
    'errorList': ("errorList")
  },hashTypes:{'hasError': "ID",'header': "ID",'message': "ID",'errorList': "ID"},hashContexts:{'hasError': depth0,'header': depth0,'message': depth0,'errorList': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "error-alert", options))));
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression((helper = helpers['success-alert'] || (depth0 && depth0['success-alert']),options={hash:{
    'showSuccess': ("showSuccess"),
    'message': ("successMessage")
  },hashTypes:{'showSuccess': "ID",'message': "ID"},hashContexts:{'showSuccess': depth0,'message': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "success-alert", options))));
  data.buffer.push("\n\n                <div class=\"form-group\">\n                    <label for=\"newEmail\">New Email address</label>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("email"),
    'class': ("form-control"),
    'placeholder': ("New e-mail address"),
    'value': ("newEmail")
  },hashTypes:{'type': "STRING",'class': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </div>\n            </div>\n        </div>\n        <hr />\n        <div class=\"row\">\n            <div class=\"col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n                <div class=\"form-group\">\n                    <label for=\"newPassword\">New Password</label>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'class': ("form-control"),
    'placeholder': ("New Password"),
    'value': ("newPassword")
  },hashTypes:{'type': "STRING",'class': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"confirmNewPassword\">Confirm Password</label>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'class': ("form-control"),
    'placeholder': ("Confirm new password"),
    'value': ("confirmNewPassword")
  },hashTypes:{'type': "STRING",'class': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </div>\n            </div>\n        </div>\n        <hr />\n        <div class=\"row\">\n            <div class=\"col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n                <div class=\"form-group\">\n                    <label for=\"password\">Confirm existing password to make changes</label>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'class': ("form-control"),
    'placeholder': ("Existing password"),
    'value': ("password")
  },hashTypes:{'type': "STRING",'class': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </div>\n\n                <button class=\"btn btn-primary\" type=\"submit\">Update</button>\n            </div>\n        </div>\n    </form>\n</div>");
  return buffer;
  
});
Ember.TEMPLATES["accountSetup"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-4 col-md-offset-4\">\n            <h3>First-time Login</h3>\n            <p>Please update your e-mail address and password.</p>\n\n            ");
  data.buffer.push(escapeExpression((helper = helpers['error-alert'] || (depth0 && depth0['error-alert']),options={hash:{
    'hasError': ("hasError"),
    'header': ("errorHeader"),
    'message': ("errorMessage"),
    'errorList': ("errorList")
  },hashTypes:{'hasError': "ID",'header': "ID",'message': "ID",'errorList': "ID"},hashContexts:{'hasError': depth0,'header': depth0,'message': depth0,'errorList': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "error-alert", options))));
  data.buffer.push("\n\n            <form ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "update", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email address</label>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("email"),
    'class': ("form-control"),
    'placeholder': ("E-mail"),
    'value': ("newEmail")
  },hashTypes:{'type': "STRING",'class': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">New Password</label>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'class': ("form-control"),
    'placeholder': ("New Password"),
    'value': ("newPassword")
  },hashTypes:{'type': "STRING",'class': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Confirm Password</label>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'class': ("form-control"),
    'placeholder': ("Confirm Password"),
    'value': ("confirmNewPassword")
  },hashTypes:{'type': "STRING",'class': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\">Update Account</button>\n            </form>\n        </div>\n    </div>\n</div>");
  return buffer;
  
});
Ember.TEMPLATES["activeProfile"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div id=\"main\">\n    <div class=\"packery\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-profile-id': ("model.id")
  },hashTypes:{'data-profile-id': "STRING"},hashContexts:{'data-profile-id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        <div class=\"grid-sizer\"></div>\n        <div class=\"gutter-sizer\"></div>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "widgets", options) : helperMissing.call(depth0, "outlet", "widgets", options))));
  data.buffer.push("\n    </div>\n</div>\n\n");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "addWidget", options) : helperMissing.call(depth0, "outlet", "addWidget", options))));
  return buffer;
  
});
Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("<h1>server-dash</h1>");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <span class=\"hidden-xs\">Welcome, ");
  stack1 = helpers._triageMustache.call(depth0, "user.email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                    ");
  stack1 = helpers['if'].call(depth0, "viewingProfile", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                    <i class=\"fa fa-2x fa-power-off\" title=\"Logout\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("></i>\n                ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                        <span class=\"visible-xs-inline visible-sm-inline\">\n                            <i class=\"fa fa-2x fa-bars\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleSidebar", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("></i>\n                        </span>\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "account", options) : helperMissing.call(depth0, "link-to", "account", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("\n                            <i class=\"fa fa-2x fa-cog\" title=\"Account Settings\"></i>\n                        ");
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "profiles", options) : helperMissing.call(depth0, "link-to", "profiles", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program8(depth0,data) {
  
  
  data.buffer.push("\n                            <i class=\"fa fa-2x fa-home\" title=\"View Dashboard\"></i>\n                        ");
  }

function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                Welcome, ");
  stack1 = helpers._triageMustache.call(depth0, "user.email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }

  data.buffer.push("<header>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-xs-6 xs-p-l10\">\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "profiles", options) : helperMissing.call(depth0, "link-to", "profiles", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n            <div class=\"col-xs-6 text-right\">\n                ");
  stack1 = helpers['if'].call(depth0, "user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        </div>\n        <div class=\"row visible-xs mobile-welcome xs-p-l10\">\n            ");
  stack1 = helpers['if'].call(depth0, "user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n</header>\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});
Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-4 col-md-offset-4\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers['error-alert'] || (depth0 && depth0['error-alert']),options={hash:{
    'hasError': ("hasError"),
    'header': ("errorHeader"),
    'message': ("errorMessage"),
    'errorList': ("errorList")
  },hashTypes:{'hasError': "ID",'header': "ID",'message': "ID",'errorList': "ID"},hashContexts:{'hasError': depth0,'header': depth0,'message': depth0,'errorList': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "error-alert", options))));
  data.buffer.push("\n\n            <form ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email address</label>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("email"),
    'class': ("form-control"),
    'placeholder': ("E-mail"),
    'value': ("email")
  },hashTypes:{'type': "STRING",'class': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'class': ("form-control"),
    'placeholder': ("Password"),
    'value': ("password")
  },hashTypes:{'type': "STRING",'class': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n            </form>\n        </div>\n    </div>\n</div>");
  return buffer;
  
});
Ember.TEMPLATES["profileWidgets"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['render-widget'] || (depth0 && depth0['render-widget']),options={hash:{
    'name': ("profileWidget.widget.name"),
    'profileWidgetId': ("profileWidget.id"),
    'title': ("profileWidget.widget.displayName"),
    'sortOrder': ("profileWidget.sortOrder"),
    'data': ("widgetData")
  },hashTypes:{'name': "ID",'profileWidgetId': "ID",'title': "ID",'sortOrder': "ID",'data': "ID"},hashContexts:{'name': depth0,'profileWidgetId': depth0,'title': depth0,'sortOrder': depth0,'data': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "profileWidget.widget.name", options) : helperMissing.call(depth0, "render-widget", "profileWidget.widget.name", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n    ");
  }

  stack1 = helpers.each.call(depth0, "profileWidget", "in", "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});
Ember.TEMPLATES["profiles"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <div class=\"profile-icon\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectProfile", "profile", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n            <i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":fa :fa-2x profile.icon")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i>\n            ");
  stack1 = helpers._triageMustache.call(depth0, "profile.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"sidebar\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":sidebar mobileSidebarVisible:in")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    ");
  stack1 = helpers.each.call(depth0, "profile", "in", "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    <div class=\"profile-icon\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showAddWidget", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n        <i class=\"fa fa-2x fa-plus\"></i>\n        Add Widget\n    </div>\n</div>\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});
Ember.TEMPLATES["components/error-alert"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <ul class=\"alert-list\">\n            ");
  stack1 = helpers.each.call(depth0, "error", "in", "errorList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <li>");
  stack1 = helpers._triageMustache.call(depth0, "error", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            ");
  return buffer;
  }

  data.buffer.push("<div id=\"error\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":alert :alert-danger hasError:visible:hidden")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" role=\"alert\">\n    <div class=\"alert-header\">");
  stack1 = helpers._triageMustache.call(depth0, "header", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n    <div class=\"alert-message\">");
  stack1 = helpers._triageMustache.call(depth0, "message", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n    ");
  stack1 = helpers['if'].call(depth0, "errorList.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});
Ember.TEMPLATES["components/success-alert"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"error\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":alert :alert-success showSuccess:visible:hidden")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" role=\"alert\">\n    <div class=\"alert-header\">");
  stack1 = helpers._triageMustache.call(depth0, "message", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n</div>");
  return buffer;
  
});
Ember.TEMPLATES["components/widget-disk-usage"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                <tr>\n                                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "disk.fileSystem", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "disk.size", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "disk.used", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "disk.available", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "disk.capacity", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "disk.mounted", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                                </tr>\n                            ");
  return buffer;
  }

  data.buffer.push("<div class=\"item col-xl-4 col-lg-4 col-md-3 col-sm-2 col-xs-1\"\n     data-height='{ \"xl\": 3, \"lg\": 3, \"md\": 2, \"sm\": 1, \"xs\": 1 }'\n    ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-profile-widget-id': ("profileWidgetId"),
    'data-sort-order': ("sortOrder"),
    'data-name': ("name")
  },hashTypes:{'data-profile-widget-id': "STRING",'data-sort-order': "STRING",'data-name': "STRING"},hashContexts:{'data-profile-widget-id': depth0,'data-sort-order': depth0,'data-name': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    <div class=\"widget-wrapper\">\n        <div class=\"handle\"></div>\n        <div class=\"header\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        <div class=\"content-wrapper\">\n            <div class=\"content\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-bordered table-hover table-condensed\">\n                        <thead>\n                            <tr>\n                                <th>FILESYSTEM</th>\n                                <th>SIZE</th>\n                                <th>USED</th>\n                                <th>AVAIL</th>\n                                <th>USE%</th>\n                                <th>MOUNTED</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            ");
  stack1 = helpers.each.call(depth0, "disk", "in", "data.diskUsage.diskUsage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});
Ember.TEMPLATES["components/widget-error"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"item col-xl-3 col-lg-3 col-md-2 col-sm-2 col-xs-1\"\n     data-height='{ \"xl\": 2, \"lg\": 2, \"md\": 2, \"sm\": 1, \"xs\": 1 }'\n     ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-profile-widget-id': ("profileWidgetId"),
    'data-sort-order': ("sortOrder"),
    'data-name': ("name")
  },hashTypes:{'data-profile-widget-id': "STRING",'data-sort-order': "STRING",'data-name': "STRING"},hashContexts:{'data-profile-widget-id': depth0,'data-sort-order': depth0,'data-name': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    <div class=\"widget-wrapper\">\n        <div class=\"handle\"></div>\n        <div class=\"header\">Error Loading Widget \"");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\"</div>\n        <div class=\"content-wrapper\">\n            <div class=\"content\">\n            </div>\n        </div>\n    </div>\n\n    ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});
Ember.TEMPLATES["components/widget-general"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"item col-xl-3 col-lg-3 col-md-2 col-sm-2 col-xs-1\"\n     data-height='{ \"xl\": 2, \"lg\": 2, \"md\": 2, \"sm\": 1, \"xs\": 1 }'\n    ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-profile-widget-id': ("profileWidgetId"),
    'data-sort-order': ("sortOrder"),
    'data-name': ("name")
  },hashTypes:{'data-profile-widget-id': "STRING",'data-sort-order': "STRING",'data-name': "STRING"},hashContexts:{'data-profile-widget-id': depth0,'data-sort-order': depth0,'data-name': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    <div class=\"widget-wrapper\">\n        <div class=\"handle\"></div>\n        <div class=\"header\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        <div class=\"content-wrapper\">\n            <div class=\"content\">\n                <div>OS: ");
  stack1 = helpers._triageMustache.call(depth0, "data.general.os", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                <div>Uptime: ");
  stack1 = helpers._triageMustache.call(depth0, "data.general.uptime", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                <div>Server Time: ");
  stack1 = helpers._triageMustache.call(depth0, "data.general.serverTime", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                <div>Hostname: ");
  stack1 = helpers._triageMustache.call(depth0, "data.general.hostname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n            </div>\n        </div>\n    </div>\n\n    ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n");
  return buffer;
  
});
Ember.TEMPLATES["components/widget-processes"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <tr>\n                                <td>");
  stack1 = helpers._triageMustache.call(depth0, "process.user", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                                <td>");
  stack1 = helpers._triageMustache.call(depth0, "process.pid", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                                <td>");
  stack1 = helpers._triageMustache.call(depth0, "process.cpu", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                                <td>");
  stack1 = helpers._triageMustache.call(depth0, "process.mem", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                                <td>");
  stack1 = helpers._triageMustache.call(depth0, "process.vsz", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                                <td>");
  stack1 = helpers._triageMustache.call(depth0, "process.rss", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                                <td>");
  stack1 = helpers._triageMustache.call(depth0, "process.tty", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                                <td>");
  stack1 = helpers._triageMustache.call(depth0, "process.stat", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                                <td>");
  stack1 = helpers._triageMustache.call(depth0, "process.start", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                                <td>");
  stack1 = helpers._triageMustache.call(depth0, "process.time", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                                <td class=\"narrow-column\">");
  stack1 = helpers._triageMustache.call(depth0, "process.command", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                            </tr>\n                        ");
  return buffer;
  }

  data.buffer.push("<div class=\"item col-xl-5 col-lg-5 col-md-4 col-sm-2 col-xs-1\"\n     data-height='{ \"xl\": 3, \"lg\": 3, \"md\": 2, \"sm\": 2, \"xs\": 1 }'\n    ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-profile-widget-id': ("profileWidgetId"),
    'data-sort-order': ("sortOrder"),
    'data-name': ("name")
  },hashTypes:{'data-profile-widget-id': "STRING",'data-sort-order': "STRING",'data-name': "STRING"},hashContexts:{'data-profile-widget-id': depth0,'data-sort-order': depth0,'data-name': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    <div class=\"widget-wrapper\">\n        <div class=\"handle\"></div>\n        <div class=\"header\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        <div class=\"content-wrapper\">\n            <div class=\"content\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-bordered table-hover table-condensed\">\n                        <thead>\n                        <tr>\n                            <th>USER</th>\n                            <th>PID</th>\n                            <th>%CPU</th>\n                            <th>%MEM</th>\n                            <th>VSZ</th>\n                            <th>RSS</th>\n                            <th>TTY</th>\n                            <th>STAT</th>\n                            <th>START</th>\n                            <th>TIME</th>\n                            <th class=\"narrow-column\">COMMAND</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        ");
  stack1 = helpers.each.call(depth0, "process", "in", "data.processes.processes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});
Ember.TEMPLATES["widgets/add"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['render-widget'] || (depth0 && depth0['render-widget']),options={hash:{
    'name': ("widget.name"),
    'title': ("widget.displayName"),
    'data': ("widgetData")
  },hashTypes:{'name': "ID",'title': "ID",'data': "ID"},hashContexts:{'name': depth0,'title': depth0,'data': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "widget.name", options) : helperMissing.call(depth0, "render-widget", "widget.name", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <div class=\"button-bar\">\n                <i class=\"fa fa-plus\" title=\"Add Widget\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addWidget", "widget", {hash:{
    'target': ("view")
  },hashTypes:{'target': "ID"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("></i>\n                <i title=\"Show Details\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":fa :fa-bars showingDetails:hide:show")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n                   ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showDetails", "widget", {hash:{
    'target': ("view")
  },hashTypes:{'target': "ID"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n                </i>\n                <i title=\"Hide Details\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":fa :fa-remove showingDetails:show:hide")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "hideDetails", "widget", {hash:{
    'target': ("view")
  },hashTypes:{'target': "ID"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n                </i>\n            </div>\n        ");
  return buffer;
  }

  data.buffer.push("<div id=\"add-widget\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":packery :no-left :add-widget :fade isShowing:in")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    <div class=\"grid-sizer\"></div>\n    <div class=\"gutter-sizer\"></div>\n    ");
  stack1 = helpers.each.call(depth0, "widget", "in", "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n<div id=\"add-widget-button-bar\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":add-widget-button-bar :fade isShowing:in")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    <button class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Cancel</button>\n</div>\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":modal-backdrop :fade isShowing:in isShowing:dark")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></div>");
  return buffer;
  
});