$(function(){
    loadStories();
    $("#stories").on("click",".btn-danger",handleDelete)
    $("#addBtn").click(addStory);
});

function addStory(){
    var title = $("#title").val();
    var content = $("#content").val();
    $.ajax({
        url: "https://usmanlive.com/wp-json/api/stories",
        method: "POST",
        data: {title,content},
        success: function(){
            loadStories();
        }
    });
    $("#title").val("");
    $("#content").val("");
}

function handleDelete(){
    var btn = $(this);
    var parentDiv = btn.closest(".story");
    let id = parentDiv.attr("data-id");

    $.ajax({
        url: "https://usmanlive.com/wp-json/api/stories/" + id,
        method: "DELETE",
        success: function(){
            loadStories();
        }
    });
}

function loadStories(){
    $.ajax({
        url: "https://usmanlive.com/wp-json/api/stories",
        method: "GET",
        error: function(response){
            stories.html("An Error has occured!");
        },
        success: function(response){
            var stories = $("#stories");
            stories.empty();
            for(var i = 0;i < response.length;i++){
                var sto = response[i];
                stories.append(`<div class="story" data-id="${sto.id}"><h3>${sto.title}</h3><p>${sto.content}</p><button id="ediBtn" class="btn btn-warning btn-sm float-right">Edit</button><button id="delBtn" class="btn btn-danger btn-sm float-right">Delete</button></div>`);
            }
        }
    });
}