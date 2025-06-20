// Add your notification into "notifications" and separate them with a comma. Ensure that they are in double quotes.

const custom_notifications = [

  //1 system downtime only
  //"<b>[Attention: System Maintenance]</b> Please view the <u><a href='https://go.gov.sg/gobiz-maintenance-notice' target='_blank' rel='noopener'>upcoming maintenance schedule</a></u> for details. We apologise for the inconvenience caused."
  //multiple services
  "<b>[Attention: System Maintenance]</b> Certain GoBusiness services will be unavailable due to upcoming maintenance. Please check our <B><u><a href='https://go.gov.sg/gobiz-maintenance-notice' target='_blank' rel='noopener'>maintenance schedule</a></u></B> for details.", 
  "<b>[Scam Advisory]</b> GoBusiness will NEVER ask you to transfer money or disclose banking details over a phone call. <u><a href='/scam-advisory/' target='_blank' rel='noopener'>Learn more</a></u>"
  
]; 


// Do not edit the following code

const custom_notificationContainer = `<div class="notifications-container" role="complementary" aria-label="announcement"></div>`;
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
