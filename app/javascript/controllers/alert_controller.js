import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="alert"
export default class extends Controller {
  static targets = ["alert"]
  static values = { duration: Number };

  connect() {
    this.alertTarget.classList.add("translate-y-[-100%]", "opacity-0", "transition-all", "duration-500");

    setTimeout(() => {
      this.alertTarget.classList.remove("translate-y-[-100%]", "opacity-0");
      this.alertTarget.classList.add("translate-y-0", "opacity-100");
    }, 100); // 0.1초 후 애니메이션 실행

    setTimeout(() => {
      this.alertTarget.classList.remove("translate-y-0", "opacity-100");
      this.alertTarget.classList.add("translate-y-[-100%]", "opacity-0");
    }, this.durationValue || 3000); // 기본 3초 후 사라짐
  }
}
