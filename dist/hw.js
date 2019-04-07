$(document).ready(function () {
    $('#listallbtn').on('click', function () {
        event.preventDefault()
        listall();
    });
    $('#searchbtn').on('click', function () {
        event.preventDefault()
        const ID = $("#ajax-search input[name=sstudentID]").val();
        search(ID);
    });
    $('#addbtn').on('click', function () {
        event.preventDefault()
        const addID = $("#ajax-add input[name=astudentID]").val();
        const addstudnet = $("#ajax-add input[name=astudentname]").val();
        add(addID, addstudnet);
    });
    $('#deletebtn').on('click', function () {
        event.preventDefault()
        const delID = $("#ajax-delete input[name=dstudentID]").val();
        del(delID);
    });

})
function listall() {
    $.ajax({
        url: "listall",
        type: "POST",
        datatype: "json",
        success: function (response) {
            //console.log(response);
            $("#ajax-listall").html(response);
        },
        error: function () {
            alert("ERROR");
        }
    });
};
function search(ID) {
    const inputdata = {};
    inputdata['ID'] = ID;

    $.ajax({
        url: "search",
        type: "POST",
        data : inputdata,
        datatype: "json",
        success: function (response) {
            //console.log(response);
            $("#ajax-target").html(response);
        },
        error: function () {
            alert("ERROR");
        }
    });
};

function add(addID, addstudnet) {
    const inputdata = {};
    inputdata['ID'] = addID;
    inputdata['name'] = addstudnet;
    $.ajax({
        url: "add",
        type: "POST",
        data: inputdata,
        datatype: "json",
        success: function (response) {
            listall()
            //console.log(response);
        },
        error: function () {
            alert("ERROR");
        }
    });
}

function del(delID) {
    const inputdata = {};
    inputdata['ID'] = delID;

    $.ajax({
        url: "del",
        type: "POST",
        data: inputdata,
        datatype: "json",
        success: function (response) {
            listall()
            //console.log(response);
        },
        error: function () {
            alert("ERROR");
        }
    });
}