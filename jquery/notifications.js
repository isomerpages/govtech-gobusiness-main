// Add your notification into "notifications" and separate them with a comma. Ensure that they are in double quotes.

const custom_notifications = [

  //1 system downtime only
  //"<b>[Attention: System Maintenance]</b> LTA e-Services for Vocational Licence renewal (i.e. Taxi Driver, Private Car Driver, Bus Driver and Bus Attendant ) will be scheduled for a data maintenance on 01 February 2025, from 08 00 Hrs till 01 February 2025, 16 00 Hrs.
All applications for the above licences will be unavailable. Please view the <u><a href='https://go.gov.sg/gobiz-maintenance-notice' target='_blank' rel='noopener'>upcoming maintenance schedule</a></u> for details. We apologise for the inconvenience caused."
  //multiple services
  //"<b>[Attention: System Maintenance]</b> Certain GoBusiness services will be unavailable due to upcoming maintenance. Please check our <B><u><a href='https://go.gov.sg/gobiz-maintenance-notice' target='_blank' rel='noopener'>maintenance schedule</a></u></B> for details."
  //"<b>[Attention: System Maintenance]</b> GoBusiness Dashboard will be unavailable due to maintenance on 06 Jan, 6:30pm to 8:30pm."
"<b>[Attention: System Maintenance]</b> LTA e-Services for Vocational Licence renewal (i.e. Taxi Driver, Private Car Driver, Bus Driver and Bus Attendant ) will be scheduled for maintenance on 01 February 2025, from 8:00 AM to 4:00 PM. All applications for the above licences will be unavailable. Please view the <u><a href='https://go.gov.sg/gobiz-maintenance-notice' target='_blank' rel='noopener'>upcoming maintenance schedule</a></u> for details. We apologise for the inconvenience caused.",  
"<b>[Attention: Important Notice]</b> Please be informed that the GoBusiness Helpdesk will operate from <B><u>8:00 AM to 2:00 PM</u></B> on Tuesday, 28 January 2025 (Chinese New Year Eve)<br>Normal operating hours will resume on the working day.<br>For enquiries during this period, please email Askgobiz@crimsonlogic.com.sg. We apologise for any inconvenience and thank you for your understanding."
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
