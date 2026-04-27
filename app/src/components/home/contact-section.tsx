'use client';

import { useState, type FormEvent } from 'react';

import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';

export function ContactSection() {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const company = String(formData.get('company') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (!name || !email || !message) {
      setStatus('必須項目を入力してください。');
      return;
    }

    setIsSubmitting(true);
    setStatus('送信中です。しばらくお待ちください。');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source: 'portfolio',
          name,
          company,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error('送信に失敗しました');
      }

      form.reset();
      setStatus('お問い合わせを送信しました。担当者よりご連絡します。');
    } catch {
      setStatus('送信に失敗しました。時間をおいて再度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <Container>
        <Reveal>
          <div className="contact-shell card">
            <div className="section-heading contact-heading">
              <span className="section-heading__eyebrow">Support</span>
              <h2 id="contact-title">導入・運用サポート</h2>
            </div>

            <p className="contact-lead">
              プロダクトの導入相談、運用設計、現場課題の整理についてご相談いただけます。今の業務フローを前提に、
              どこから手を入れると効果が出るかを一緒に考えます。
            </p>
            <p className="contact-note">
              試験導入の相談や、既存業務を踏まえたアプリ改善の問い合わせもこちらからどうぞ。
            </p>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <label className="form-field">
                <span>
                  名前 <em>必須</em>
                </span>
                <input type="text" name="name" autoComplete="name" required placeholder="お名前" />
              </label>

              <label className="form-field">
                <span>
                  会社名 <small>任意</small>
                </span>
                <input type="text" name="company" autoComplete="organization" placeholder="会社名（任意）" />
              </label>

              <label className="form-field">
                <span>
                  メールアドレス <em>必須</em>
                </span>
                <input type="email" name="email" autoComplete="email" required placeholder="メールアドレス" />
              </label>

              <label className="form-field">
                <span>
                  お問い合わせ内容 <em>必須</em>
                </span>
                <textarea name="message" required placeholder="ご相談内容をご記入ください" />
              </label>

              <div className="contact-actions">
                <button type="submit" className="button button--primary contact-submit" disabled={isSubmitting}>
                  {isSubmitting ? '送信中...' : '送信する'}
                </button>
              </div>
              <p className="contact-status" role="status" aria-live="polite">
                {status}
              </p>
            </form>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
