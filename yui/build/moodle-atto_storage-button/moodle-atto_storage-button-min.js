YUI.add("moodle-atto_storage-button",function(e,t){var n='<div class="storage-warning"><div><div class="message">{{get_string "warningmessage" component}}</div><div class="preview">{{{content}}}</div><div class="buttons"><button class="discard btn btn-warning">Discard</button><button class="restore btn btn-primary">Restore</button></div></div></div>';e.namespace("M.atto_storage").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{_storageSpace:null,_elementid:null,initializer:function(){var t=this.get("host");this._elementid=t.get("elementid");var n=this.get("host").editor.ancestor("form"),r=this._elementid;if(n){var i=n.getAttribute("id");i&&(r=i)}this._storageSpace=new e.CacheOffline({sandbox:this.get("userid")+"_"+r}),t.on("change",this._updateCache,this),this.editor.ancestor("form").on("submit",this._clearCache,this),this._updateFromCache()},_updateFromCache:function(){var t=this._storageSpace.retrieve(this._elementid),r=this.get("host");if(t&&t.response&&t.response!==r.textarea.get("value")){var i=e.Handlebars.compile(n),s=e.Node.create(i({component:"atto_storage",content:t.response})),o=this.editor.getComputedStyle("height"),u=this.editor.getComputedStyle("width"),a=new e.Overlay({bodyContent:s,visible:!0,render:!0,height:o,width:u});a.align(this.editor,[e.WidgetPositionAlign.CC,e.WidgetPositionAlign.CC]),s.one(".restore").on("click",function(){r.textarea.set("value",t.response),r.updateFromTextArea(),a.hide().destroy()},this),s.one(".discard").on("click",function(){a.hide().destroy(),this._clearCache()},this),s.one(".preview").setStyle("maxHeight",parseInt(o,10)-90+"px")}},_updateCache:function(e){console.log(e),this._storageSpace.add(this._elementid,this.get("host").textarea.get("value"))},_clearCache:function(){this._storageSpace.add(this._elementid,null)}},{ATTRS:{userid:{value:null}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin","cache-offline"]});
