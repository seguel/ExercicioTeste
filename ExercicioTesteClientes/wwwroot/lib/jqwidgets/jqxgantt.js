/*
jQWidgets v19.2.0 (2024-May)
Copyright (c) 2011-2024 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(){if(typeof document==="undefined"){return}(function(a){a.jqx.jqxWidget("jqxGantt","",{});a.extend(a.jqx._jqxGantt.prototype,{defineInstance:function(){var b={width:800,height:400,disabled:false,rtl:false,adjustToNonworkingTime:false,autoSchedule:false,autoScheduleStrictMode:false,autoScrollStep:5,columnMenu:false,columnMinWidth:"50px",columnResize:false,columnResizeFeedback:false,currentTime:new Date(),currentTimeIndicator:false,currentTimeIndicatorInterval:1,dataExportFileName:"jqxGanttChart",source:[],dateEnd:"",dateStart:"",dateMarkers:[],dayFormat:"short",disableAutoScroll:false,disableTaskDrag:false,disableTaskProgressChange:false,disableTaskResize:false,disableSelection:false,disableSegmentDrag:false,disableSegmentResize:false,disableWindowEditor:false,durationUnit:"milisecond",filterRow:false,firstDayOfWeek:-1,groupByResources:false,headerTemplate:null,hourFormat:"default",hideDateMarkers:false,hideTimelineHeaderDetails:false,hideTimelineSecondHeaderDetails:true,hideTimelineHeader:false,hideResourcePanel:false,showSelectionColumn:false,infiniteTimeline:false,infiniteTimelineStep:5,inverted:false,keyboardNavigation:false,monthFormat:"short",monthScale:"day",max:new Date(2100,0,1),min:new Date(1900,0,1),nonworkingDays:[],nonworkingHours:[],onTaskRender:null,popupWindowCustomizationFunction:null,popupWindowTabs:["general","dependency","segments"],progressLabelFormatFunction:null,resizeHandlesVisibility:"auto",quarterFormat:"short",resourceColumns:[{label:"resourceColumnLabel",value:"label"}],resourceFiltering:false,resourceGroupFormatFunction:null,resourcePanelHeaderTemplate:null,resourcePanelMin:100,resourcePanelSize:"",resourcePanelRefreshRate:0,resourceTimelineFormatFunction:null,resourceTimelineMode:"diagram",resourceTimelineView:"hours",selectedTaskIds:[],selectedResourceIds:[],shadeUntilCurrentTime:false,showBaseline:false,showProgressLabel:false,snapToNearest:false,sortFunction:null,sortMode:"none",taskColumns:[{label:"taskColumnLabel",value:"label"}],taskFiltering:false,taskPanelMin:200,taskPanelSize:"",timelineHeaderFormatFunction:null,timelineMin:200,treeMin:100,treeSize:"20%",tooltip:false,view:"year",yearFormat:"numeric",weekFormat:"long",events:["change"]};if(this===a.jqx._jqxGantt.prototype){return b}a.extend(true,this,b);return b},createInstance:function(b){this.render()},localize:function(e){if(!e){this.messages={duplicateIds:"{{elementType}}: DataSource contains duplicate ids. Tasks should have unique ids. The following ids are duplicating: {{duplicates}}.",invalidNonworkingRange:"{{elementType}}: Invalid {{property}} value. {{property}} should not contain all possible days/hours because it will result in an endless timeline. The value has been validated by removing the last item from the new value range.",invalidValue:"{{elementType}}: Invalid {{property}} value. {{property}} should be of type {{typeOne}} or {{typeTwo}}.",incorrectArgument:"{{elementType}}: Incorrect argument {{argumentName}} in method {{methodName}}.",outOfBounds:"{{elementType}}: Out of bounds argument {{argumentName}} in method {{methodName}}.",missingReference:"{{elementType}}: Missing reference to {{file}} in method {{methodName}}.",alreadyExists:"{{elementType}}: The item already exists when calling the {{methodName}} method.",notExisting:"{{elementType}}: The item does not exists when calling the {{methodName}} method.",notAProject:"{{elementType}}: The {{argumentName}} argument in {{methodName}} method does not reference an item of type 'project'.",noId:"jqxGanttChart requires an id in order to save/load/clear a state.",ok:"Ok",add:"Add",remove:"Remove",cancel:"Cancel","delete":"Delete",confirm:"{{componentName}} will be deleted permanently, <b>are you sure? </b>",taskColumnLabel:"Task Name",resourceColumnLabel:"Resource Name",deleteLink:"Delete link",unassigned:"Unassigned",generalTab:"General",dependencyTab:"Dependency",segmentsTab:"Segments",segment:"Segment",dependencyValidation:"*The Task cannot be connected to itself.",segmentsCountValidation:"*Segmented Tasks must have at least 2 segments. ",segmentConflictError:'*The Segment "{{label}}" is in conflict, because it starts on/before and ends on/after the {{dateConflict}} of Segment "{{conflictLabel}}." ',segmentStartError:'*The Segment "{{label}}" cannot start before it ends and cannot end before it starts.',segmentEndError:'*The Segment "{{label}}" cannot start when it ends.',segmentRangeError:'*The Segment "{{label}}" is out of Task date range. The first segment must start when the task starts and the last segment must end when the task ends.',label:"Label",duration:"Duration",dateStart:"Date Start",dateEnd:"Date End",id:"Id",name:"Name",type:"Type",lag:"Lag",startToStart:"Start-To-Start",endToStart:"End-To-Start",endToEnd:"End-To-End",startToEnd:"Start-To-End",overdue:"Overdue",weeks:"week(s)",days:"day(s)",hours:"hour(s)",minutes:"minute(s)",seconds:"second(s)",miliseconds:"milisecond(s)",task:"Task",resource:"Resource",assignments:"Assignments",startTask:"Task Start",endTask:"Task End",deadline:"Deadline",quarter:"Quarter",quarterShort:"Q"}}if(this.gantt){var d=Object.keys(this.messages);for(var b=0;b<d.length;b++){var c=d[b];if(this.gantt.messages.en[c]!==undefined){this.gantt.messages.en[c]=this.messages[c]}}}},render:function(){var e=this;if(this.host.children().length>0){this._removeHandlers();this.host.empty()}this.host.addClass(this.toThemeProperty("jqx-widget"));this.host.addClass(this.toThemeProperty("jqx-gantt"));this.host.width(this.width);this.host.height(this.height);var g=this.host.width();var d=this.host.height();var c;var f=this.rtl?"rtl":"ltr";if(!e.gantt){var b=document.createElement("jqx-gantt-chart");e.gantt=b;b.style.width="100%";b.style.height="100%"}e._refreshProperties();if(e.gantt.parentNode===null){e.element.appendChild(e.gantt)}},_refreshProperties:function(){var e=this;var c=Object.keys(e.gantt.properties);for(var d=0;d<c.length;d++){var b=c[d];if(b==="dataSource"){e.gantt.dataSource=e.source;continue}if(b==="tooltip"){e.gantt.tooltip.enabled=e.tooltip;continue}if(b==="dataExportFileName"){e.gantt.dataExport.fileName=e.dataExportFileName;continue}if(e[b]!==undefined&&e.gantt[b]!==e[b]&&e.gantt[b]!==undefined){e.gantt[b]=e[b]}}},refresh:function(b){if(!b){this.render()}},destroy:function(){a.jqx.utilities.resize(this.host,null,true);this.host.remove()},propertyChangedHandler:function(b,c,e,d){if(e!=d||d instanceof Object){if(c==="width"||c==="height"){b.host.width(this.width);b.host.height(this.height)}b._refreshProperties()}},_raiseEvent:function(g,e){var c=this.events[g];var f=new a.Event(c);f.owner=this;f.args=e;try{var b=this.host.trigger(f)}catch(d){}return b},_removeHandlers:function(){},addFilter:function(b,c){if(!this.gantt){return}this.gantt.addFilter(b,c)},clearSelection:function(){if(!this.gantt){return}this.gantt.clearSelection()},ensureVisible:function(c,b){if(!this.gantt){return}this.gantt.ensureVisible(c,b)},removeAllConnections:function(){if(!this.gantt){return}this.gantt.removeAllConnections()},removeConnection:function(d,b,c){if(!this.gantt){return}this.gantt.removeConnection(d,b,c)},removeTaskConnection:function(b,c){if(!this.gantt){return}this.gantt.removeTaskConnection(b,c)},beginUpdate:function(){if(!this.gantt){return}this.gantt.beginUpdate()},endUpdate:function(){if(!this.gantt){return}this.gantt.endUpdate()},clearFilters:function(b){if(!this.gantt){return}this.gantt.clearFilters(b)},clearSort:function(b){if(!this.gantt){return}this.gantt.clearSort(b)},clearResources:function(){if(!this.gantt){return}this.gantt.clearResources()},createConnection:function(d,b,c){if(!this.gantt){return}this.gantt.createConnection(d,b,c)},collapse:function(b){if(!this.gantt){return}this.gantt.collapse(b)},expand:function(b){if(!this.gantt){return}this.gantt.expand(b)},exportData:function(c,b){if(!this.gantt){return}return this.gantt.exportData(c,b)},print:function(){if(!this.gantt){return}this.gantt.print()},getConnectionDetails:function(b){if(!this.gantt){return}return this.gantt.getConnectionDetails(b)},getConnections:function(){if(!this.gantt){return}return this.gantt.getConnections()},getState:function(){if(!this.gantt){return}return this.gantt.getState()},getTask:function(b){if(!this.gantt){return}return this.gantt.getTask(b)},getTasks:function(){if(!this.gantt){return}return this.gantt.getTasks()},getResource:function(b){if(!this.gantt){return}return this.gantt.getResource(b)},getResources:function(){if(!this.gantt){return}return this.gantt.getResources()},getItemPath:function(b){if(!this.gantt){return}return this.gantt.getItemPath(b)},getTaskIndex:function(b){if(!this.gantt){return}return this.gantt.getTaskIndex(b)},getTaskProject:function(b){if(!this.gantt){return}return this.gantt.getTaskProject(b)},getTaskConnections:function(b){if(!this.gantt){return}return this.gantt.getTaskConnections(b)},getResourceIndex:function(b){if(!this.gantt){return}return this.gantt.getResourceIndex(b)},getResourceTasks:function(b){if(!this.gantt){return}return this.gantt.getResourceTasks(b)},getSelectedIds:function(){if(!this.gantt){return}return this.gantt.getSelectedIds()},getSelectedTasks:function(){if(!this.gantt){return}return this.gantt.getSelectedTasks()},getSelectedResources:function(){if(!this.gantt){return}return this.gantt.getSelectedResources()},getWorkingHours:function(){if(!this.gantt){return}return this.gantt.getWorkingHours()},isWorkingDay:function(b){if(!this.gantt){return}return this.gantt.isWorkingDay(b)},clearState:function(){if(!this.gantt){return}this.gantt.clearState()},loadState:function(b){if(!this.gantt){return}this.gantt.loadState(b)},saveState:function(){if(!this.gantt){return}this.gantt.saveState()},insertTask:function(b,d,c){if(!this.gantt){return}return this.gantt.insertTask(b,d,c)},openWindow:function(b){if(!this.gantt){return}return this.gantt.openWindow(b)},closeWindow:function(){if(!this.gantt){return}this.gantt.closeWindow()},updateTask:function(b,c){if(!this.gantt){return}this.gantt.updateTask(b,c)},removeTask:function(b){if(!this.gantt){return}this.gantt.removeTask(b)},setWorkTime:function(b){if(!this.gantt){return}this.gantt.setWorkTime(b)},selectTask:function(b){if(!this.gantt){return}this.gantt.selectTask(b)},selectResource:function(b){if(!this.gantt){return}this.gantt.selectResource(b)},sort:function(b){if(!this.gantt){return}this.gantt.sort(b)},unselectTask:function(b){if(!this.gantt){return}this.gantt.unselectTask(b)},unselectResource:function(b){if(!this.gantt){return}this.gantt.unselectResource(b)},unsetWorkTime:function(b){if(!this.gantt){return}this.gantt.unsetWorkTime(b)},hideTooltip:function(){if(!this.gantt){return}this.gantt.hideTooltip()},showTooltip:function(c,b){if(!this.gantt){return}this.gantt.showTooltip(c,b)}})})(jqxBaseFramework)})();
