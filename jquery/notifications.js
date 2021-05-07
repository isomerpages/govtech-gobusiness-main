// Add your notification into "notifications" and separate them with a comma. Ensure that they are in double quotes.

const custom_notifications = [
  "<b>[Attention: System Maintenance]</b> GoBusiness COVID Manpower Exemptions and Guided Journey will be unavailable due to scheduled maintenance on Monday, 10 May 2021 from 4:00pm to 6:00pm. We apologise for the inconvenience caused.",
  "<b>[Announcement]</b> Please note that from 11 April 2021, you will be required to login to government digital services for businesses (G2B) using Singpass instead of Corppass. For more information, visit <a href='https://go.gov.sg/corporate-login'>go.gov.sg/corporate-login</a>",
];

// Do not edit the following code

const custom_notificationContainer = `<div class="notifications-container"></div>`;
$(document).ready(function () {
  $("html.has-navbar-fixed-top-widescreen").attr(
    "style",
    "padding-top: 0 !important"
  );
  $(".masthead-container").attr("style", "position: relative");
  $(".masthead-container>section").attr("style", "height: 28px !important");
  $(".bp-container>div").attr("style", "margin-top: 0; margin-bottom: 0");
  $(".bp-container>div>div").attr("style", "padding: 0");
  $(".masthead-container").prepend(custom_notificationContainer);

  custom_notifications.forEach(m => {
    let notification = `<div class="notification-container">
          <h6 class="x">${m}</h6>
          <div class="control notif" style="background-color: #037e8a;">
            <a id="cancel-notification" class="button has-text-white">
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
