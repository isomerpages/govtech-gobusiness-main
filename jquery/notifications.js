// Add your notification into "notifications" and separate them with a comma. Ensure that they are in double quotes.

const custom_notifications = [
  //"<b>[Attention: System Maintenance]</b> GoBusiness Licensing, e-Advisers and Guided Journeys will be unavailable from 18 September 2021 10pm to 19 September 2021 6pm due to scheduled maintenance. We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> e-Advisers for Business Structure and Starting a Business will be unavailable due to scheduled maintenance on 8 Sep 2021 from 6pm to 8pm. We apologise for the inconvenience caused.",
  "<b>[Attention: System Maintenance]</b> GoBusiness Licensing will be unavailable during the 2 upcoming scheduled maintenance as follows. <b>Guided Journey for Food Services will remain available.</b> We apologise for the inconvenience caused.You can check our <a href='https://licence1.business.gov.sg/feportal/web/frontier/maintenance' target='blank' rel='noopener'>schedule</a> for upcoming maintenance works.<br>(1) From 25 Sep 2021 12am to 25 Sep 2021 6am<br>(2) 25 Sep 2021 10pm to 26 Sep 2021 6am",
  //"<b>[Announcement]</b> We have updated our Helpdesk contact information. Please go to our Contact Us page for the new contact details. Thank you.",
  
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
