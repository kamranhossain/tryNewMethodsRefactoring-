
Template.main.helpers({
  seeThat:function() {
    Meteor.subscribe("names");
    return Myway.find({});

  }
});


Template.main.events({
"click .submit": function(event, template){
  event.preventDefault();
  var text = $(bar).val();
  Meteor.call("enterName");
  console.log(text);
},

});
