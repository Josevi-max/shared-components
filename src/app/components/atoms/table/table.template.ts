import { html } from 'lit';
import { WcTable } from './table';

export const tableTemplate = (host: WcTable) => html`
    <table>
  <thead>
    <tr>
      ${host.columns.map(col => html`
        <th>
          ${col.label}
        </th>
      `)}
    </tr>
  </thead>

  <tbody>
    ${host.data.map(row => html`
      <tr @click=${() => host.emitRowClick(row)}>
        ${host.columns.map(col => html`
          <td>
            ${col.render
    ? col.render(row)
    : row[col.key]
  }
          </td>
        `)}
      </tr>
    `)}
  </tbody>
</table>

`;