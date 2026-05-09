import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, CheckCircle, Clock, Upload, Camera, FileText, IdCard, ShieldCheck, ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { C } from '../theme';

interface UploadCard {
  id: string;
  icon: LucideIcon;
  label: string;
  type: 'upload' | 'camera';
  uploaded: boolean;
  filename?: string;
}

interface ReviewStatus {
  id: string;
  icon: LucideIcon;
  label: string;
  status: 'verified' | 'review';
}

export default function KYCVerification() {
  const navigate = useNavigate();
  const [kycState, setKycState] = useState<0 | 1>(0);
  const [docs, setDocs] = useState<UploadCard[]>([
    { id: 'aadhaar', icon: IdCard, label: 'Aadhaar Card', type: 'upload', uploaded: false },
    { id: 'pan', icon: FileText, label: 'PAN Card', type: 'upload', uploaded: false },
    { id: 'selfie', icon: Camera, label: 'Selfie Photo', type: 'camera', uploaded: false },
  ]);

  const handleUpload = (id: string) => {
    const names: Record<string, string> = {
      aadhaar: 'aadhaar_card.jpg',
      pan: 'pan_card.jpg',
      selfie: 'selfie.jpg',
    };
    setDocs(prev => prev.map(d => d.id === id ? { ...d, uploaded: true, filename: names[id] } : d));
  };

  const allUploaded = docs.every(d => d.uploaded);

  const handleSubmit = () => {
    if (!allUploaded) return;
    setKycState(1);
  };

  const reviewStatus: ReviewStatus[] = [
    { id: 'aadhaar', icon: IdCard, label: 'Aadhaar Card', status: 'verified' },
    { id: 'pan', icon: FileText, label: 'PAN Card', status: 'verified' },
    { id: 'selfie', icon: Camera, label: 'Selfie Photo', status: 'review' },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: C.bg }}>
      {/* AppBar */}
      <div style={{
        backgroundColor: 'white', height: 56, display: 'flex', alignItems: 'center',
        padding: '0 16px', borderBottom: `1px solid ${C.divider}`, flexShrink: 0,
      }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
          <ChevronLeft size={24} color={C.textDark} />
        </button>
        <h1 style={{ flex: 1, textAlign: 'center', fontSize: 17, fontWeight: 600, color: C.textDark }}>
          {kycState === 0 ? 'KYC Verification' : 'Verification Status'}
        </h1>
        <div style={{ width: 32 }} />
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
        {kycState === 0 ? (
          <>
            {/* Header */}
            <div style={{
              backgroundColor: '#EFF6FF', borderRadius: 16, padding: '18px 16px',
              marginBottom: 20, display: 'flex', gap: 12, alignItems: 'flex-start',
            }}>
              <ShieldCheck size={28} color={C.primary} />
              <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: C.primary, marginBottom: 2 }}>
                  Complete Your KYC
                </p>
                <p style={{ fontSize: 13, color: C.textGrey }}>
                  Required to start accepting tasks
                </p>
              </div>
            </div>

            {/* Upload cards */}
            {docs.map(doc => (
              <div
                key={doc.id}
                style={{
                  backgroundColor: 'white', borderRadius: 16, padding: '16px',
                  marginBottom: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  border: `2px solid ${doc.uploaded ? C.success : C.divider}`,
                  cursor: 'pointer', transition: 'border-color 0.2s',
                }}
                onClick={() => !doc.uploaded && handleUpload(doc.id)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  {/* Doc icon */}
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    backgroundColor: doc.uploaded ? '#F0FDF4' : '#F3F4F6',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <doc.icon size={22} color={doc.uploaded ? C.success : C.textDark} />
                  </div>
                  {/* Info */}
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 15, fontWeight: 600, color: C.textDark, marginBottom: 2 }}>
                      {doc.label}
                    </p>
                    {doc.uploaded ? (
                      <p style={{ fontSize: 12, color: C.success, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6 }}>
                        <CheckCircle size={14} color={C.success} /> {doc.filename}
                      </p>
                    ) : (
                      <p style={{ fontSize: 12, color: C.textGrey }}>
                        {doc.type === 'camera' ? 'Tap to take selfie' : 'Tap to upload'}
                      </p>
                    )}
                  </div>
                  {/* Action icon */}
                  {doc.uploaded ? (
                    <CheckCircle size={22} color={C.success} />
                  ) : (
                    <div style={{
                      width: 38, height: 38, borderRadius: 10,
                      backgroundColor: '#F3F4F6', display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                    }}>
                      {doc.type === 'camera'
                        ? <Camera size={18} color={C.textGrey} />
                        : <Upload size={18} color={C.textGrey} />
                      }
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Progress */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 12, color: C.textGrey }}>Upload Progress</span>
                <span style={{ fontSize: 12, color: C.primary, fontWeight: 600 }}>
                  {docs.filter(d => d.uploaded).length} / 3
                </span>
              </div>
              <div style={{ height: 6, backgroundColor: '#F3F4F6', borderRadius: 3 }}>
                <div style={{
                  height: '100%', borderRadius: 3,
                  backgroundColor: C.success,
                  width: `${(docs.filter(d => d.uploaded).length / 3) * 100}%`,
                  transition: 'width 0.3s ease',
                }} />
              </div>
            </div>

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              disabled={!allUploaded}
              style={{
                width: '100%', height: 52, borderRadius: 12,
                backgroundColor: allUploaded ? C.accent : '#D1D5DB',
                color: 'white', border: 'none', fontSize: 15, fontWeight: 600,
                cursor: allUploaded ? 'pointer' : 'not-allowed',
                fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              }}
            >
              {allUploaded ? (
                <>
                  <ArrowUpRight size={16} />
                  Submit for Verification
                </>
              ) : 'Upload all documents to continue'}
            </button>
          </>
        ) : (
          <>
            {/* KYC Under Review */}
            <div style={{
              backgroundColor: '#DCFCE7', borderRadius: 16, padding: '20px 16px',
              marginBottom: 20, textAlign: 'center',
            }}>
              <div style={{ fontSize: 48, marginBottom: 8 }}>
              <Clock size={48} color={C.accent} />
            </div>
              <h2 style={{ fontSize: 20, fontWeight: 600, color: C.textDark, marginBottom: 6 }}>
                KYC Under Review
              </h2>
              <p style={{ fontSize: 13, color: C.textGrey }}>
                Our team is verifying your documents
              </p>
            </div>

            {/* Status cards */}
            {reviewStatus.map(doc => (
              <div key={doc.id} style={{
                backgroundColor: 'white', borderRadius: 16, padding: '14px 16px',
                marginBottom: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <doc.icon size={22} color={C.textDark} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: C.textDark }}>{doc.label}</p>
                </div>
                {doc.status === 'verified' ? (
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 4,
                    backgroundColor: '#F0FDF4', padding: '4px 10px', borderRadius: 20,
                  }}>
                    <CheckCircle size={14} color={C.success} />
                    <span style={{ fontSize: 12, color: C.success, fontWeight: 600 }}>Verified</span>
                  </div>
                ) : (
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 4,
                    backgroundColor: '#DCFCE7', padding: '4px 10px', borderRadius: 20,
                  }}>
                    <Clock size={14} color={C.accent} />
                    <span style={{ fontSize: 12, color: C.accent, fontWeight: 600 }}>Under Review</span>
                  </div>
                )}
              </div>
            ))}

            {/* Info box */}
            <div style={{
              backgroundColor: '#EFF6FF', borderRadius: 14, padding: '14px 16px',
              marginBottom: 24, marginTop: 8,
              display: 'flex', gap: 10, alignItems: 'flex-start',
            }}>
              <span style={{ fontSize: 18 }}>ℹ️</span>
              <p style={{ fontSize: 13, color: C.primary, lineHeight: 1.5 }}>
                Our team will verify your documents within <strong>24 hours</strong>.
                You'll receive a notification once verified.
              </p>
            </div>

            {/* Continue button */}
            <button
              onClick={() => navigate('/dashboard')}
              style={{
                width: '100%', height: 52, borderRadius: 12,
                backgroundColor: C.accent, color: 'white',
                border: 'none', fontSize: 15, fontWeight: 600,
                cursor: 'pointer', fontFamily: 'inherit',
              }}
            >
              Continue to Dashboard →
            </button>
          </>
        )}
      </div>
    </div>
  );
}
