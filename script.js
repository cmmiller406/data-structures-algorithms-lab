"use strict";
$(document).ready(() => {

    const queue = [];
    $(".submit-btn").on("click", function () {
        $('.input').each(function () {
            queue.push($(this).val());
            console.log(queue);
        });
        $(".queue-bug").text(`Title of Bug: ${queue[0]}   Description of Bug: ${queue[1]}`);
    });

    $(".box").on("checked"), (event) => {
        queue.pop();
    };

});




