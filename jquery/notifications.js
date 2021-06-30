// Add your notification into "notifications" and separate them with a comma. Ensure that they are in double quotes.

const custom_notifications = [
  "<b>[Announcement]</b> There will be a change in our Helpdesk contact information. Please go to our <a href='https://www.gobusiness.gov.sg/contact-us/'>Contact Us</a> page for the new contact details from 1 July 2021.",
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
