// MULTIPART FORM //
    var currentTab = 0;
    showTab(currentTab);
    stepIndicatorSet(currentTab);

    var modal_button = document.getElementById("modal-toggle")

    modal_button.onclick = function() {
        modal.style.display = "flex";
        currentTab = 0;
        console.log(currentTab)
        showTab(currentTab);
        stepIndicatorSet(currentTab);
    }

    function hideAllTabs() {
        var tabs = document.getElementsByClassName("tab");
        for(i=0; i<=tabs.length-1; i++) {
            tabs[i].style.display = "none";
        }
    }
    
    function showTab(n) {
        var tabs = document.getElementsByClassName("tab");
        hideAllTabs();
        tabs[n].style.display = "flex";
        if(n==(tabs.length-1)) {
            document.getElementById("modal-btn").innerHTML = "Submit";
        }
        else {
            document.getElementById("modal-btn").innerHTML = "Next";
        }
    }

    function stepIndicatorSet(n) {
        var steps = document.getElementsByClassName("step");
        var stepLine = steps[n].querySelector('.step-line');
        stepLine.classList.replace("bg-gray-400", "bg-blue-500");
    }

    function stepIndicatorUnset() {
        var stepLine = document.getElementsByClassName("step-line");
        for(i=0; i<=stepLine.length-1; i++) {
            stepLine[i].classList.replace("bg-blue-500", "bg-gray-400");
        }
        
    }

    function nextPrevious(n) {
        var tabs = document.getElementsByClassName("tab");
        if(n==1) {
            tabs[currentTab].style.display = "none";
            currentTab = currentTab+1;
        }
        if(currentTab>=tabs.length) {
            alert("Page Returned Nothing!");
        }
        showTab(currentTab);
        //stepIndicatorUnset()
        stepIndicatorSet(currentTab)
    }

    function openModal(mdl) {
        modal = document.getElementById(mdl);
        modal.style.display = "flex";
    }
    
    function closeModal(mdl) {
        modal = document.getElementById(mdl);
        modal.style.display = "none";
    }

    function closeButton() {
        currentTab = 0;
        stepIndicatorUnset()
        var modal = document.getElementById("modal");
        modal.style.display = "none";
    }

    $(document).ready(function() {
        $("#sel_occupation").change(function() {
            if($("#sel_occupation").val() == "G" || $("#sel_occupation").val() == "P") {
                $("#alert_occupation").addClass("hidden");
                $("#b_section").addClass("hidden");
                $("#j_section").removeClass("hidden");
            }
            else if($("#sel_occupation").val() == "B" || $("#sel_occupation").val() == "O") {
                $("#alert_occupation").addClass("hidden");
                $("#b_section").removeClass("hidden");
                $("#j_section").addClass("hidden");
            }
            else {
                $("#alert_occupation").removeClass("hidden");
                $("#b_section").addClass("hidden");
                $("#j_section").addClass("hidden");
            }
        });

        $("#form_close_btn").click(function() {
            $("#alert_occupation").removeClass("hidden");
            $("#b_section").addClass("hidden");
            $("#j_section").addClass("hidden");
            $("#frm_addPolicy").trigger("reset");
            closeModal("mdl_addPolicy");
        });

        $("#btn_add_member").click(function() {
            $("#edited_row").removeClass("hidden");
            $("#edited_row").addClass("isActive");
        })



        $("#mbr_status").change(function() {
            if($("#mbr_status").val() == "1") {
                $(".td-dead").prop('disabled', true);
                $(".td-alive").prop('disabled', false);
                $(".td-dead").removeClass("bg-gray-200 border-gray-300");
                $(".td-dead").addClass("bg-gray-100 border-gray-200");
                $(".td-alive").addClass("bg-gray-200 border-gray-300");
            }
            if($("#mbr_status").val() == "0") {
                $(".td-alive").prop('disabled', true);
                $(".td-dead").prop('disabled', false);
                $(".td-alive").removeClass("bg-gray-200 border-gray-300");
                $(".td-alive").addClass("bg-gray-100 border-gray-200");
                $(".td-dead").addClass("bg-gray-200 border-gray-300");
            }
        })

        $("#close_edited_row").click(function() {
            $("#edited_row :input[type=text]").val("");
            $("#edited_row :input[type=number]").val("");
            $("#mbr_type").val("def");
            $("#mbr_status").val("def");
            $(".td-dead").prop('disabled', true);
            $(".td-alive").prop('disabled', true);
            $(".td-dead").removeClass("bg-gray-200 border-gray-300");
            $(".td-dead").addClass("bg-gray-100 border-gray-200");
            $(".td-alive").removeClass("bg-gray-200 border-gray-300");
            $(".td-alive").addClass("bg-gray-100 border-gray-200");
            $("#edited_row").removeClass("isActive");
            $("#edited_row").addClass("hidden");
        })

        $("#add_edited_row").click(function() {
            if($("#mbr_type").val() == "def" || $("#mbr_status").val() == "def") {
                alert("Please select appropriate fields form the dropdown.");
            }
            if($("#mbr_type").val() != "def" && $("#mbr_status").val() != "def") {
                
            }
        })


    });