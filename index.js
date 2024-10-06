$(document).ready(function(){
    // book appointment
    $("#submitBtn").click(function(e){
        e.preventDefault();
        let name = $("#name").val();
        let email = $("#email").val();
        let number = $("#number").val();
        let service = $("#select").val();
        let date = $("#date").val();
        let time = $("#time").val();

        myData = {
            name:name,
            email:email,
            number:number,
            service:service,
            date:date,
            time:time
        };
        $.ajax({
            url:"insertAppointment.php",
            method:"POST",
            data:JSON.stringify(myData),
            success: function(data){
                if(data == 1){
                    swal.fire({
                        title:"Great",
                        text: "Your Appointment has been booked successfully",
                        icon:"success",
                        showConfirmButton: false,
                        timer:2500
                    });
                    $("#makeAppoint")[0].reset();
                }
                else if(data == 0){
                    swal.fire({
                        title:"Error",
                        text: "Unable to book Appointment",
                        icon:"error",
                        showConfirmButton:false,
                        timer: 2500
                    });
                }
                else{
                    swal.fire({
                        title:"Fill all the fields",
                        icon:"warning",
                        showConfirmButton:false,
                        timer: 2500
                    });
                }
                
            }
        });
    });

    // contact Us
    $("#csubmitBtn").click(function(e){
        e.preventDefault();
        console.log("submit button clicked from contact");
        let cname = $("#cname").val();
        let cemail = $("#cemail").val();
        let csubject = $("#csubject").val();
        let cmsg = $("#cmessage").val();

        cmyData = {
            name: cname,
            email:cemail,
            subject:csubject,
            msg:cmsg
        };
        $.ajax({
            url: "insertContact.php",
            method:"POST",
            data: JSON.stringify(cmyData),
            success: function(data){
                if(data == 1){
                    swal.fire({
                        title:"Thank You",
                        text: "Thanks for Contacting Us!",
                        icon:"success",
                        showConfirmButton:false,
                        timer: 2500
                    });
                    $("#contactUs")[0].reset();
                }
                else if(data == 0){
                    swal.fire({
                        title:"Error",
                        text: "Unable to send message",
                        icon:"error",
                        showConfirmButton:false,
                        timer: 2500
                    });
                }
                else{
                    swal.fire({
                        title:"Fill all the fields",
                        icon:"warning",
                        showConfirmButton:false,
                        timer: 2500
                    });
                }
                
            }
        });
    });
});