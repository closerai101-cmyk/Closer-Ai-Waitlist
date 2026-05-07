interface FeatureCardProps {
  icon: React.ReactNode;
  label: string;
  description: string;
}

export function FeatureCard({ icon, label, description }: FeatureCardProps) {
  return (
    <div className="bg-[#0A0A0A] border border-[#C0152A]/20 rounded-2xl p-7 md:p-10 flex flex-col items-start space-y-5 md:space-y-6 hover:border-[#C0152A] transition-colors">
      <div className="text-[#C0152A]">
        {icon}
      </div>
      <div className="space-y-3">
        <h3 className="text-white uppercase tracking-[0.3em] text-sm font-medium">
          {label}
        </h3>
        <p className="text-[#999999] font-light leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
