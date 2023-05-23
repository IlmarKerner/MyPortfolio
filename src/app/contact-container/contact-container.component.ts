import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.scss'],
})
export class ContactContainerComponent implements OnInit {
  @ViewChild('myForm') myForm: ElementRef;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('emailField') emailField: ElementRef;
  @ViewChild('messageField') messageField: ElementRef;
  @ViewChild('sendButton') sendButton: ElementRef;

  ngOnInit(): void {}

  input = document.getElementById('nameInput');

  checkInput() {}

  sendetMail = false;

  async sendMail() {
    this.sendetMail = true;
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    let formdata = new FormData();
    formdata.append('name', nameField.value);
    formdata.append('email', emailField.value);
    formdata.append('message', messageField.value);

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;

    let response = await fetch(
      'https://ilmar-kerner.de/send_mail/send_mail.php',
      {
        method: 'POST',
        body: formdata,
      }
    );
    let result = await response.text();
    console.log(result);

    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;

    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
  }

  sendAnimation() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    if (!nameField.value || !emailField.value || !messageField.value) {
      sendButton.innerText = 'Caution!';
      sendButton.classList.add("error");
      setTimeout(() => {
        sendButton.innerText = 'Send message :)';
        sendButton.classList.remove('error');
      }, 1000);
    } else {
      this.sendetMail = true;
      setTimeout(() => {
        this.sendetMail = false;
      }, 4500);
    }
  }
}
