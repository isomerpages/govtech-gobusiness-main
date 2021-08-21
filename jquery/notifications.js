// Add your notification into "notifications" and separate them with a comma. Ensure that they are in double quotes.

const custom_notifications = [
  "<b>[Attention: System Maintenance]</b> GoBusiness Licensing will be unavailable due to scheduled maintenance from 21 Aug 2021 10pm to 22 Aug 2021 8am. <b>Guided Journey for Food Services will remain available.</b> We apologise for the inconvenience caused.",
  "<b>[Announcement]</b> We have updated our Helpdesk contact information. Please go to our Contact Us page for the new contact details. Thank you.",
];

// Do not edit the following code

const custom_notificationContainer = `<div class="notifications-container"></div>`;
$(document).ready(function () {
  $("html.has-navbar-fixed-top-widescreen").attr(
    "style",
    "padding-top: 0 !important"
  );
  $(".masthead-container").attr("style", "position: relative");
  $(".bp-container>div").attr("style", "margin-top: 0; margin-bottom: 0");
  $(".bp-container>div>div").attr("style", "padding: 0");
  $(".masthead-container").prepend(custom_notificationContainer);

  custom_notifications.forEach(m => {
    let notification = `<div class="notification-container">
          <h6 class="x">${m}</h6>
          <div class="control notif" style="background-color: #037e8a;">
            <a id="cancel-notification" class="button has-text-white" href="#">
              <span class="delete sgds-icon sgds-icon-cross is-size-4"></span>
            </a>
          </div>
        </div>`;
    $(".notifications-container").append(notification);
  });
  $(window).scrollTop();
  $(".control.notif").each(function () {
    $(this).click(function () {
      $(this).parent().remove();
    });
  });
  $(".x>a").attr("target", "_blank");
});
