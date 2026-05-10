type CareersSimpleFooterProps = {
  note: string;
};

export default function CareersSimpleFooter({
  note,
}: CareersSimpleFooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-simple">
        <span className="footer-logo">saha.</span>
        <span className="footer-note">{note}</span>
      </div>
    </footer>
  );
}
