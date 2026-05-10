import CareersApplyForm from "./Form";
import CareersSimpleFooter from "./CareersSimpleFooter";

export default function CareersApplyPage() {
  return (
    <div id="section-careers">
      <div id="careers-page-apply" className="page active">
        <CareersApplyForm />
        <CareersSimpleFooter note="© 2025 Saha NZ Limited - Students first, always." />
      </div>
    </div>
  );
}
