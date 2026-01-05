type Props = {
  title: string;
  children: React.ReactNode;
  intro?: string;
};

export default function ContentSection({ title, children, intro }: Props) {
  return (
    <section className="section">
      <div className="container-responsive">
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
        {intro ? <p className="mt-3 text-white/80 max-w-prose">{intro}</p> : null}
        <div className="mt-6 grid gap-6">{children}</div>
      </div>
    </section>
  );
}
